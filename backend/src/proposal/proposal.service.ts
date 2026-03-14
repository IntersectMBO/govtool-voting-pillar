import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import path from 'path';
import * as fs from 'fs';
import { createHash } from 'crypto';

import { ProposalListDto } from './proposal.dto';
import {
  GovernanceActionProposalType,
  RawQueryGovernanceActionProposalType,
} from '../types/proposal';

type ProposalSurveyLinkRow = {
  proposal_db_id: string;
  proposal_type: string;
  tx_hash: string;
  proposal_index: string | number;
  expiration_epoch: string | number | null;
  anchor_json: unknown;
};

type SurveyDetailsRow = {
  survey_tx_hash: string;
  survey_slot: string | number;
  metadata_id: string | number;
  metadata_json: Record<string, unknown>;
};

type SurveyResponseRow = {
  metadata_id: string | number;
  metadata_json: Record<string, unknown>;
  slot_no: string | number;
  epoch_no: string | number;
  tx_index: string | number | null;
  tx_id: string | number;
  voting_procedure_count: string | number;
  voter_role: string | null;
  response_credential: string;
  drep_voting_power: string | number | null;
  pool_voting_power: string | number | null;
  cc_active_at_end_epoch: boolean | null;
};

type ResponderRole = 'DRep' | 'SPO' | 'CC' | 'Stakeholder';
type WeightingMode =
  | 'CredentialBased'
  | 'StakeBased'
  | 'PledgeBased';

type SurveyQuestion = {
  questionId: string;
  question: string;
  methodType: string;
  options?: string[];
  maxSelections?: number;
  numericConstraints?: {
    minValue: number;
    maxValue: number;
    step?: number;
  };
  methodSchemaUri?: string;
  methodSchemaHash?: string;
};

type SurveyDetails = {
  specVersion: string;
  title: string;
  description: string;
  questions: SurveyQuestion[];
  roleWeighting: Partial<Record<ResponderRole, WeightingMode>>;
  endEpoch: number;
};

type SurveyContext = {
  proposalDbId: number;
  proposalType: string;
  proposalId: {
    txId: string;
    govActionIx: number;
  };
  actionEndEpoch: number | null;
  actionEligibility: ResponderRole[];
  surveyTxId: string | null;
  surveyDetails: SurveyDetails | null;
  linkedRoleWeighting: Partial<Record<ResponderRole, WeightingMode>> | null;
  linkErrors: string[];
  surveyErrors: string[];
};

type ValidatedResponse = {
  row: SurveyResponseRow;
  responderRole: ResponderRole;
  weight: number;
  answers: {
    questionId: string;
    selection?: number[];
    numericValue?: number;
    customValue?: unknown;
  }[];
};

@Injectable()
export class ProposalService {
  private readonly logger = new Logger(ProposalService.name);
  private sqlCache: { [key: string]: string } = {};
  private readonly schemaCache = new Map<string, Record<string, unknown>>();

  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  private loadSqlFile(filePath: string): string {
    if (!this.sqlCache[filePath]) {
      try {
        this.sqlCache[filePath] = fs.readFileSync(filePath, 'utf8');
      } catch (error) {
        this.logger.error(`Failed to read SQL file: ${filePath}`, error.stack);
        throw new Error(`Could not load SQL file: ${error.message}`);
      }
    }
    return this.sqlCache[filePath];
  }

  private stableSerialize(value: unknown): string {
    if (value === null || value === undefined) {
      return 'null';
    }
    if (Array.isArray(value)) {
      return `[${value.map((entry) => this.stableSerialize(entry)).join(',')}]`;
    }
    if (typeof value === 'object') {
      const record = value as Record<string, unknown>;
      const keys = Object.keys(record).sort();
      return `{${keys
        .map((key) => `${JSON.stringify(key)}:${this.stableSerialize(record[key])}`)
        .join(',')}}`;
    }
    return JSON.stringify(value);
  }

  private blake2b256Hex(buffer: Buffer): string {
    try {
      return createHash('blake2b512', { outputLength: 32 })
        .update(buffer)
        .digest('hex');
    } catch (_error) {
      return createHash('blake2b512').update(buffer).digest('hex').slice(0, 64);
    }
  }

  private parseProposalId(proposalId: string): { txHash: string; index: number } {
    const match = proposalId.match(/^([0-9a-fA-F]{64})#(\d+)$/);
    if (!match) {
      throw new Error('Invalid proposalId format. Expected: <txHash>#<index>');
    }
    return {
      txHash: match[1].toLowerCase(),
      index: Number(match[2]),
    };
  }

  private getActionEligibility(proposalType: string): ResponderRole[] {
    switch (proposalType) {
      case 'TreasuryWithdrawals':
      case 'NewConstitution':
        return ['DRep', 'CC'];
      case 'NoConfidence':
      case 'NewCommittee':
      case 'HardForkInitiation':
      case 'ParameterChange':
      case 'InfoAction':
        return ['DRep', 'SPO', 'CC'];
      default:
        return ['DRep', 'SPO', 'CC'];
    }
  }

  private isAllowedWeighting(role: ResponderRole, weighting: WeightingMode): boolean {
    switch (role) {
      case 'DRep':
        return ['CredentialBased', 'StakeBased'].includes(weighting);
      case 'SPO':
        return ['CredentialBased', 'StakeBased', 'PledgeBased'].includes(weighting);
      case 'CC':
        return weighting === 'CredentialBased';
      case 'Stakeholder':
        return weighting === 'StakeBased';
      default:
        return false;
    }
  }

  private toResponderRole(value: unknown): ResponderRole | null {
    if (value === 'DRep' || value === 'SPO' || value === 'CC' || value === 'Stakeholder') {
      return value;
    }
    return null;
  }

  private getResponseWeight(
    row: SurveyResponseRow,
    responderRole: ResponderRole,
    weighting: WeightingMode,
  ): number {
    if (weighting === 'CredentialBased') {
      return 1;
    }

    if (responderRole === 'DRep') {
      return Number(row.drep_voting_power ?? 0);
    }

    if (responderRole === 'SPO') {
      return Number(row.pool_voting_power ?? 0);
    }

    if (responderRole === 'CC') {
      return row.cc_active_at_end_epoch ? 1 : 0;
    }

    return 0;
  }

  private validateSurveyDetails(
    surveyDetails: SurveyDetails | null,
    actionEndEpoch: number | null,
    actionEligibility: ResponderRole[],
  ): { errors: string[]; questionMap: Map<string, SurveyQuestion> } {
    const errors: string[] = [];
    const questionMap = new Map<string, SurveyQuestion>();

    if (!surveyDetails || typeof surveyDetails !== 'object') {
      errors.push('Missing surveyDetails payload.');
      return { errors, questionMap };
    }

    if (surveyDetails.specVersion !== '1.0.0') {
      errors.push('surveyDetails.specVersion must be 1.0.0.');
    }
    if (!surveyDetails.title || typeof surveyDetails.title !== 'string') {
      errors.push('surveyDetails.title must be a non-empty string.');
    }
    if (
      !surveyDetails.description ||
      typeof surveyDetails.description !== 'string'
    ) {
      errors.push('surveyDetails.description must be a non-empty string.');
    }

    if (!Array.isArray(surveyDetails.questions) || !surveyDetails.questions.length) {
      errors.push('surveyDetails.questions must contain at least one question.');
      return { errors, questionMap };
    }

    if (
      !surveyDetails.roleWeighting ||
      typeof surveyDetails.roleWeighting !== 'object' ||
      Array.isArray(surveyDetails.roleWeighting) ||
      Object.keys(surveyDetails.roleWeighting).length === 0
    ) {
      errors.push('surveyDetails.roleWeighting must contain at least one role.');
    } else {
      for (const [roleKey, weighting] of Object.entries(surveyDetails.roleWeighting)) {
        const role = this.toResponderRole(roleKey);
        if (!role) {
          errors.push(`Invalid roleWeighting role: ${roleKey}`);
          continue;
        }

        if (
          typeof weighting !== 'string' ||
          !this.isAllowedWeighting(role, weighting as WeightingMode)
        ) {
          errors.push(`Invalid weighting mode for ${roleKey}: ${String(weighting)}`);
        }
      }
    }

    const linkedRoleWeightingKeys = Object.keys(surveyDetails.roleWeighting ?? {}).filter(
      (roleKey) => actionEligibility.includes(roleKey as ResponderRole),
    );
    if (!linkedRoleWeightingKeys.length) {
      errors.push('Survey roleWeighting has no overlap with governance action eligibility.');
    }

    const endEpoch = Number(surveyDetails.endEpoch);
    if (!Number.isInteger(endEpoch) || endEpoch < 0) {
      errors.push('surveyDetails.endEpoch must be a non-negative integer.');
    } else if (actionEndEpoch !== null && endEpoch !== actionEndEpoch) {
      errors.push('surveyDetails.endEpoch must exactly match the governance action voting end epoch.');
    }

    const seenQuestionIds = new Set<string>();

    for (const question of surveyDetails.questions) {
      if (!question?.questionId || typeof question.questionId !== 'string') {
        errors.push('Each survey question requires a questionId string.');
        continue;
      }
      if (seenQuestionIds.has(question.questionId)) {
        errors.push(`Duplicate questionId in survey: ${question.questionId}`);
        continue;
      }
      seenQuestionIds.add(question.questionId);

      if (!question.question || typeof question.question !== 'string') {
        errors.push(`Question ${question.questionId} has invalid question text.`);
      }
      if (!question.methodType || typeof question.methodType !== 'string') {
        errors.push(`Question ${question.questionId} has invalid methodType.`);
        continue;
      }

      const isSingle =
        question.methodType === 'urn:cardano:poll-method:single-choice:v1';
      const isMulti =
        question.methodType === 'urn:cardano:poll-method:multi-select:v1';
      const isNumeric =
        question.methodType === 'urn:cardano:poll-method:numeric-range:v1';
      const isCustom = !isSingle && !isMulti && !isNumeric;

      if (isSingle || isMulti) {
        if (!Array.isArray(question.options) || question.options.length < 2) {
          errors.push(
            `Question ${question.questionId} requires at least two options.`,
          );
        }
      }

      if (isSingle) {
        if (
          question.maxSelections !== undefined &&
          Number(question.maxSelections) !== 1
        ) {
          errors.push(
            `Question ${question.questionId}: single-choice maxSelections must be absent or 1.`,
          );
        }
      }

      if (isMulti) {
        const maxSelections = Number(question.maxSelections);
        if (!Number.isInteger(maxSelections) || maxSelections < 1) {
          errors.push(
            `Question ${question.questionId}: multi-select requires maxSelections >= 1.`,
          );
        } else if (
          Array.isArray(question.options) &&
          maxSelections > question.options.length
        ) {
          errors.push(
            `Question ${question.questionId}: maxSelections exceeds options length.`,
          );
        }
      }

      if (isNumeric) {
        const min = Number(question.numericConstraints?.minValue);
        const max = Number(question.numericConstraints?.maxValue);
        const stepRaw = question.numericConstraints?.step;
        const step = stepRaw === undefined ? undefined : Number(stepRaw);

        if (!Number.isInteger(min) || !Number.isInteger(max)) {
          errors.push(
            `Question ${question.questionId}: numeric-range requires integer minValue/maxValue.`,
          );
        } else if (min > max) {
          errors.push(
            `Question ${question.questionId}: numeric-range minValue must be <= maxValue.`,
          );
        }
        if (step !== undefined && (!Number.isInteger(step) || step <= 0)) {
          errors.push(
            `Question ${question.questionId}: numeric-range step must be a positive integer.`,
          );
        }
      }

      if (isCustom) {
        if (!question.methodSchemaUri || typeof question.methodSchemaUri !== 'string') {
          errors.push(`Question ${question.questionId}: missing methodSchemaUri.`);
        }
        if (
          !question.methodSchemaHash ||
          !/^[0-9a-fA-F]{64}$/.test(question.methodSchemaHash)
        ) {
          errors.push(
            `Question ${question.questionId}: methodSchemaHash must be a 64-char hex string.`,
          );
        }
      }

      questionMap.set(question.questionId, question);
    }

    return { errors, questionMap };
  }

  private resolveSchemaUri(methodSchemaUri: string): string | null {
    if (methodSchemaUri.startsWith('ipfs://')) {
      const ipfsGateway =
        process.env.SURVEY_SCHEMA_IPFS_GATEWAY ?? 'https://ipfs.io/ipfs/';
      return `${ipfsGateway.replace(/\/+$/, '/')}${methodSchemaUri.replace(
        'ipfs://',
        '',
      )}`;
    }
    if (
      methodSchemaUri.startsWith('https://') ||
      methodSchemaUri.startsWith('http://')
    ) {
      return methodSchemaUri;
    }
    return null;
  }

  private async fetchCustomMethodSchema(
    question: SurveyQuestion,
  ): Promise<{ schema: Record<string, unknown> | null; errors: string[] }> {
    const errors: string[] = [];
    const cacheKey = `${question.methodSchemaUri}::${question.methodSchemaHash}`;

    if (this.schemaCache.has(cacheKey)) {
      return { schema: this.schemaCache.get(cacheKey), errors };
    }

    if (!question.methodSchemaUri || !question.methodSchemaHash) {
      errors.push(
        `Question ${question.questionId}: method schema URI/hash are required.`,
      );
      return { schema: null, errors };
    }

    const resolvedUrl = this.resolveSchemaUri(question.methodSchemaUri);
    if (!resolvedUrl) {
      errors.push(
        `Question ${question.questionId}: unsupported methodSchemaUri protocol.`,
      );
      return { schema: null, errors };
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10_000);
      const response = await fetch(resolvedUrl, { signal: controller.signal });
      clearTimeout(timeout);

      if (!response.ok) {
        errors.push(
          `Question ${question.questionId}: failed to fetch schema (${response.status}).`,
        );
        return { schema: null, errors };
      }

      const schemaBuffer = Buffer.from(await response.arrayBuffer());
      const fetchedHash = this.blake2b256Hex(schemaBuffer).toLowerCase();
      if (fetchedHash !== question.methodSchemaHash.toLowerCase()) {
        errors.push(
          `Question ${question.questionId}: method schema hash mismatch.`,
        );
        return { schema: null, errors };
      }

      const parsed = JSON.parse(schemaBuffer.toString('utf8'));
      if (!parsed || typeof parsed !== 'object') {
        errors.push(`Question ${question.questionId}: method schema is invalid.`);
        return { schema: null, errors };
      }

      this.schemaCache.set(cacheKey, parsed);
      return { schema: parsed, errors };
    } catch (error) {
      errors.push(
        `Question ${question.questionId}: schema fetch/parse failed (${String(error)}).`,
      );
      return { schema: null, errors };
    }
  }

  private validateAgainstSchema(
    value: unknown,
    schema: Record<string, unknown>,
    pathKey = 'customValue',
  ): string[] {
    const errors: string[] = [];
    const schemaType = schema.type;
    const typeList = Array.isArray(schemaType) ? schemaType : [schemaType];
    const hasType = schemaType !== undefined;

    const matchesType = (targetType: unknown) => {
      if (targetType === 'object') {
        return (
          typeof value === 'object' && value !== null && !Array.isArray(value)
        );
      }
      if (targetType === 'array') {
        return Array.isArray(value);
      }
      if (targetType === 'integer') {
        return typeof value === 'number' && Number.isInteger(value);
      }
      if (targetType === 'number') {
        return typeof value === 'number' && Number.isFinite(value);
      }
      if (targetType === 'string') {
        return typeof value === 'string';
      }
      if (targetType === 'boolean') {
        return typeof value === 'boolean';
      }
      if (targetType === 'null') {
        return value === null;
      }
      return true;
    };

    if (hasType && !typeList.some((targetType) => matchesType(targetType))) {
      errors.push(`${pathKey} does not match schema type.`);
      return errors;
    }

    if (
      Array.isArray(schema.enum) &&
      !schema.enum.some((enumValue) => this.stableSerialize(enumValue) === this.stableSerialize(value))
    ) {
      errors.push(`${pathKey} must match one of the enum values.`);
      return errors;
    }

    if (
      schema.type === 'object' &&
      schema.properties &&
      typeof schema.properties === 'object' &&
      value &&
      typeof value === 'object' &&
      !Array.isArray(value)
    ) {
      const valueRecord = value as Record<string, unknown>;
      const properties = schema.properties as Record<string, Record<string, unknown>>;
      const required = Array.isArray(schema.required)
        ? (schema.required as string[])
        : [];

      for (const key of required) {
        if (!(key in valueRecord)) {
          errors.push(`${pathKey}.${key} is required by schema.`);
        }
      }

      for (const [propertyKey, propertySchema] of Object.entries(properties)) {
        if (valueRecord[propertyKey] === undefined) {
          continue;
        }
        errors.push(
          ...this.validateAgainstSchema(
            valueRecord[propertyKey],
            propertySchema,
            `${pathKey}.${propertyKey}`,
          ),
        );
      }
    }

    if (
      schema.type === 'array' &&
      schema.items &&
      Array.isArray(value) &&
      typeof schema.items === 'object'
    ) {
      for (let index = 0; index < value.length; index++) {
        errors.push(
          ...this.validateAgainstSchema(
            value[index],
            schema.items as Record<string, unknown>,
            `${pathKey}[${index}]`,
          ),
        );
      }
    }

    return errors;
  }

  private async validateSurveyResponse(
    surveyResponse: Record<string, unknown>,
    questionMap: Map<string, SurveyQuestion>,
    linkedRoleWeighting: Partial<Record<ResponderRole, WeightingMode>>,
    row: SurveyResponseRow,
    surveyTxId: string,
    endEpoch: number,
  ): Promise<{
    valid: boolean;
    errors: string[];
    responderRole: ResponderRole | null;
    answers: ValidatedResponse['answers'];
  }> {
    const errors: string[] = [];
    const answersPayload = surveyResponse.answers;
    const answers: ValidatedResponse['answers'] = [];
    const responderRole = this.toResponderRole(surveyResponse.responderRole);

    if (surveyResponse.specVersion !== '1.0.0') {
      errors.push('surveyResponse.specVersion must be 1.0.0.');
    }
    if (surveyResponse.surveyTxId !== surveyTxId) {
      errors.push('surveyResponse.surveyTxId does not match the linked survey.');
    }
    if (!responderRole) {
      errors.push('surveyResponse.responderRole must be one of DRep, SPO, CC, or Stakeholder.');
    } else if (!linkedRoleWeighting[responderRole]) {
      errors.push(`surveyResponse.responderRole ${responderRole} is not eligible for this linked survey.`);
    }
    if (Number(row.epoch_no) > endEpoch) {
      errors.push('Response was submitted after survey endEpoch.');
    }
    if (Number(row.voting_procedure_count) !== 1) {
      errors.push('Linked survey responses must include exactly one voting procedure entry.');
    }
    if (!row.voter_role) {
      errors.push('Could not derive responder role from the linked voting procedure.');
    } else if (responderRole && row.voter_role !== responderRole) {
      errors.push('Claimed responderRole does not match the linked voting procedure role.');
    }
    if (!row.response_credential) {
      errors.push('Could not derive a unique response credential from the linked voting procedure.');
    }

    if (!Array.isArray(answersPayload) || !answersPayload.length) {
      errors.push('surveyResponse.answers must be a non-empty array.');
      return { valid: false, errors, responderRole, answers };
    }

    const seenQuestionIds = new Set<string>();

    for (const answer of answersPayload as Record<string, unknown>[]) {
      const questionId = answer.questionId;
      if (!questionId || typeof questionId !== 'string') {
        errors.push('Each answer must include a questionId string.');
        continue;
      }
      if (seenQuestionIds.has(questionId)) {
        errors.push(`Duplicate answer questionId: ${questionId}`);
        continue;
      }
      seenQuestionIds.add(questionId);

      const question = questionMap.get(questionId);
      if (!question) {
        errors.push(`Answer references unknown questionId: ${questionId}`);
        continue;
      }

      const hasSelection = Object.prototype.hasOwnProperty.call(answer, 'selection');
      const hasNumeric = Object.prototype.hasOwnProperty.call(answer, 'numericValue');
      const hasCustom = Object.prototype.hasOwnProperty.call(answer, 'customValue');
      const answerKeyCount = [hasSelection, hasNumeric, hasCustom].filter(Boolean).length;

      if (answerKeyCount !== 1) {
        errors.push(
          `Answer ${questionId} must include exactly one of selection/numericValue/customValue.`,
        );
        continue;
      }

      const methodType = question.methodType;
      const parsedAnswer: ValidatedResponse['answers'][number] = { questionId };

      if (methodType === 'urn:cardano:poll-method:single-choice:v1') {
        const selection = answer.selection;
        if (
          !Array.isArray(selection) ||
          selection.length !== 1 ||
          !selection.every((entry) => Number.isInteger(entry))
        ) {
          errors.push(`Question ${questionId}: single-choice requires one integer selection.`);
          continue;
        }
        const selectedIndex = Number(selection[0]);
        if (
          !Array.isArray(question.options) ||
          selectedIndex < 0 ||
          selectedIndex >= question.options.length
        ) {
          errors.push(`Question ${questionId}: selection index out of range.`);
          continue;
        }
        parsedAnswer.selection = [selectedIndex];
      } else if (methodType === 'urn:cardano:poll-method:multi-select:v1') {
        const selection = answer.selection;
        if (
          !Array.isArray(selection) ||
          !selection.every((entry) => Number.isInteger(entry))
        ) {
          errors.push(`Question ${questionId}: multi-select requires integer array selection.`);
          continue;
        }
        const maxSelections = Number(question.maxSelections ?? 0);
        if (selection.length > maxSelections) {
          errors.push(`Question ${questionId}: selection exceeds maxSelections.`);
          continue;
        }
        if (
          Array.isArray(question.options) &&
          selection.some(
            (entry) => Number(entry) < 0 || Number(entry) >= question.options.length,
          )
        ) {
          errors.push(`Question ${questionId}: selection contains out-of-range index.`);
          continue;
        }
        parsedAnswer.selection = selection.map((entry) => Number(entry));
      } else if (methodType === 'urn:cardano:poll-method:numeric-range:v1') {
        const numericValue = Number(answer.numericValue);
        const minValue = Number(question.numericConstraints?.minValue);
        const maxValue = Number(question.numericConstraints?.maxValue);
        const step = question.numericConstraints?.step
          ? Number(question.numericConstraints.step)
          : null;

        if (!Number.isInteger(numericValue)) {
          errors.push(`Question ${questionId}: numericValue must be an integer.`);
          continue;
        }
        if (numericValue < minValue || numericValue > maxValue) {
          errors.push(`Question ${questionId}: numericValue out of range.`);
          continue;
        }
        if (step && (numericValue - minValue) % step !== 0) {
          errors.push(`Question ${questionId}: numericValue violates step.`);
          continue;
        }
        parsedAnswer.numericValue = numericValue;
      } else {
        if (!hasCustom) {
          errors.push(`Question ${questionId}: custom method requires customValue.`);
          continue;
        }
        const { schema, errors: schemaErrors } = await this.fetchCustomMethodSchema(
          question,
        );
        if (schemaErrors.length || !schema) {
          errors.push(...schemaErrors);
          continue;
        }
        const customValidationErrors = this.validateAgainstSchema(
          answer.customValue,
          schema,
        );
        if (customValidationErrors.length) {
          errors.push(...customValidationErrors.map((entry) => `${questionId}: ${entry}`));
          continue;
        }
        parsedAnswer.customValue = answer.customValue;
      }

      answers.push(parsedAnswer);
    }

    return {
      valid: errors.length === 0,
      errors,
      responderRole,
      answers,
    };
  }

  private async buildSurveyContext(proposalId: string): Promise<SurveyContext> {
    const { txHash, index } = this.parseProposalId(proposalId);
    const linkSql = this.loadSqlFile(
      path.join(__dirname, '../sql', 'get-proposal-survey-link.sql'),
    );

    const linkRows = await this.dataSource.query<ProposalSurveyLinkRow[]>(linkSql, [
      txHash,
      index,
    ]);

    if (!linkRows.length) {
      throw new Error(`Proposal with id: ${proposalId} not found`);
    }

    const row = linkRows[0];
    const linkErrors: string[] = [];
    const surveyErrors: string[] = [];
    const actionEligibility = this.getActionEligibility(row.proposal_type);
    const actionEndEpoch =
      row.expiration_epoch === null ? null : Number(row.expiration_epoch);

    const anchorJson =
      typeof row.anchor_json === 'string'
        ? (JSON.parse(row.anchor_json) as Record<string, unknown>)
        : (row.anchor_json as Record<string, unknown> | null);

    const kind = anchorJson?.kind;
    if (kind && kind !== 'cardano-governance-survey-link') {
      linkErrors.push('Anchor metadata kind is not cardano-governance-survey-link.');
    }

    const surveyTxId =
      typeof anchorJson?.surveyTxId === 'string'
        ? anchorJson.surveyTxId.toLowerCase()
        : null;

    if (!surveyTxId) {
      linkErrors.push('Missing top-level surveyTxId in anchor metadata.');
      return {
        proposalDbId: Number(row.proposal_db_id),
        proposalType: row.proposal_type,
        proposalId: { txId: txHash, govActionIx: index },
        actionEndEpoch,
        actionEligibility,
        surveyTxId: null,
        surveyDetails: null,
        linkedRoleWeighting: null,
        linkErrors,
        surveyErrors,
      };
    }

    const surveyDetailsSql = this.loadSqlFile(
      path.join(__dirname, '../sql', 'get-survey-details.sql'),
    );
    const surveyRows = await this.dataSource.query<SurveyDetailsRow[]>(
      surveyDetailsSql,
      [surveyTxId],
    );

    const detailsRow = surveyRows.find((entry) => entry.metadata_json?.surveyDetails);
    if (!detailsRow) {
      linkErrors.push('Referenced surveyTxId has no label 17 surveyDetails payload.');
      return {
        proposalDbId: Number(row.proposal_db_id),
        proposalType: row.proposal_type,
        proposalId: { txId: txHash, govActionIx: index },
        actionEndEpoch,
        actionEligibility,
        surveyTxId,
        surveyDetails: null,
        linkedRoleWeighting: null,
        linkErrors,
        surveyErrors,
      };
    }

    const surveyDetails = detailsRow.metadata_json.surveyDetails as SurveyDetails;

    const { errors: validationErrors } = this.validateSurveyDetails(
      surveyDetails,
      actionEndEpoch,
      actionEligibility,
    );
    surveyErrors.push(...validationErrors);

    const linkedRoleWeighting = Object.fromEntries(
      Object.entries(surveyDetails.roleWeighting ?? {}).filter(([roleKey]) =>
        actionEligibility.includes(roleKey as ResponderRole),
      ),
    ) as Partial<Record<ResponderRole, WeightingMode>>;

    if (!Object.keys(linkedRoleWeighting).length) {
      linkErrors.push('Linked survey has no eligible roles after governance action filtering.');
    }

    return {
      proposalDbId: Number(row.proposal_db_id),
      proposalType: row.proposal_type,
      proposalId: { txId: txHash, govActionIx: index },
      actionEndEpoch,
      actionEligibility,
      surveyTxId,
      surveyDetails,
      linkedRoleWeighting,
      linkErrors,
      surveyErrors,
    };
  }

  async listProposals(query: ProposalListDto) {
    const {
      page = 0,
      pageSize = 10,
      sort = 'SoonestToExpire',
      type = null,
      search = '',
      drepId = null,
    } = query;

    const normalizedParams = {
      search: search ? `%${search}%` : '',
      drepId: drepId || null,
      sort,
      type: Array.isArray(type) ? type[0] || null : type || null,
      offset: Number(page) * Number(pageSize),
      limit: Number(pageSize),
    };

    this.logger.debug(
      'Executing proposal query with parameters',
      normalizedParams,
    );

    const sqlFilePath = path.join(__dirname, '../sql', 'list-proposals.sql');
    const sql = this.loadSqlFile(sqlFilePath);

    try {
      const countSql = `SELECT COUNT(*) AS total FROM (${sql}) AS filtered_proposals`;

      const countParams = [
        normalizedParams.search,
        normalizedParams.drepId,
        normalizedParams.sort,
        normalizedParams.type,
      ];

      this.logger.debug(
        'Count query params (types):',
        countParams.map((p) => typeof p),
      );
      this.logger.debug(
        'Count query params (values):',
        JSON.stringify(countParams),
      );

      const totalResult = await this.dataSource.query<{ total: string }[]>(
        countSql,
        countParams,
      );

      const total = parseInt(totalResult[0].total, 10);
      this.logger.debug(`Count query returned total: ${total}`);

      const dataSql = `${sql} LIMIT $5 OFFSET $6`;

      const dataParams = [
        normalizedParams.search,
        normalizedParams.drepId,
        normalizedParams.sort,
        normalizedParams.type,
        normalizedParams.limit,
        normalizedParams.offset,
      ];

      this.logger.debug(
        'Data query params (types):',
        dataParams.map((p) => typeof p),
      );
      this.logger.debug(
        'Data query params (values):',
        JSON.stringify(dataParams),
      );

      const result = await this.dataSource.query<
        RawQueryGovernanceActionProposalType[]
      >(dataSql, dataParams);

      this.logger.debug(`Data query returned ${result.length} results`);

      if (result.length === 0) {
        this.logger.debug('No results returned.');
      }

      const elements = result.map(this.mapGovernanceActionProposals);

      return {
        page: Number(page),
        pageSize: Number(pageSize),
        total,
        elements,
      };
    } catch (error) {
      this.logger.error('Failed to execute proposal query', error.stack);
      throw new Error(`Database query failed: ${error.message}`);
    }
  }

  async getProposalById(
    proposalId: string,
  ): Promise<GovernanceActionProposalType> {
    try {
      const [hash] = proposalId.split('#');
      const result = await this.listProposals({ search: hash });

      if (result.elements.length === 0) {
        return null;
      }

      return result.elements[0];
    } catch (error) {
      this.logger.error(
        `Failed to retrieve proposal by ID: ${proposalId}`,
        error.stack,
      );
      throw new Error(`Could not retrieve proposal: ${error.message}`);
    }
  }

  async getProposalSurvey(proposalId: string) {
    const context = await this.buildSurveyContext(proposalId);
    const linkValidationErrors = [...context.linkErrors];
    const surveyValidationErrors = [...context.surveyErrors];
    const isLinkValid = linkValidationErrors.length === 0 && !!context.surveyTxId;
    const isSurveyValid = surveyValidationErrors.length === 0 && !!context.surveyDetails;

    return {
      linked: !!context.surveyTxId,
      surveyTxId: context.surveyTxId,
      linkValidation: {
        valid: isLinkValid,
        errors: linkValidationErrors,
        actionEligibility: context.actionEligibility,
        linkedRoleWeighting: context.linkedRoleWeighting,
        linkedActionId: context.proposalId,
      },
      surveyDetails: context.surveyDetails,
      surveyDetailsValidation: {
        valid: isSurveyValid,
        errors: surveyValidationErrors,
      },
    };
  }

  async getProposalSurveyTally(
    proposalId: string,
    _weighting: 'CredentialBased' | 'StakeBased' = 'CredentialBased',
  ) {
    const context = await this.buildSurveyContext(proposalId);
    const contextErrors = [...context.linkErrors, ...context.surveyErrors];

    if (!context.surveyTxId || !context.surveyDetails || !context.linkedRoleWeighting || contextErrors.length) {
      return {
        surveyTxId: context.surveyTxId ?? null,
        totals: {
          totalSeen: 0,
          valid: 0,
          invalid: 0,
          deduped: 0,
          uniqueResponders: 0,
        },
        roleResults: [],
        errors: contextErrors,
      };
    }

    const { questionMap } = this.validateSurveyDetails(
      context.surveyDetails,
      context.actionEndEpoch,
      context.actionEligibility,
    );

    const responseSql = this.loadSqlFile(
      path.join(__dirname, '../sql', 'get-survey-responses.sql'),
    );
    const responseRows = await this.dataSource.query<SurveyResponseRow[]>(
      responseSql,
      [context.surveyTxId, context.proposalDbId, context.surveyDetails.endEpoch],
    );

    const groupedByCredential = new Map<string, SurveyResponseRow[]>();
    for (const row of responseRows) {
      const surveyResponse = row.metadata_json?.surveyResponse as
        | Record<string, unknown>
        | undefined;
      const responderRole = this.toResponderRole(surveyResponse?.responderRole);
      const key = `${responderRole ?? 'unknown'}:${row.response_credential}`;
      const existing = groupedByCredential.get(key);
      if (existing) {
        existing.push(row);
      } else {
        groupedByCredential.set(key, [row]);
      }
    }

    let invalidResponses = 0;
    const selectedResponses: ValidatedResponse[] = [];

    for (const [, entries] of groupedByCredential) {
      let picked = false;
      for (const row of entries) {
        const surveyResponse = row.metadata_json?.surveyResponse as
          | Record<string, unknown>
          | undefined;

        if (!surveyResponse) {
          invalidResponses += 1;
          continue;
        }

        const validation = await this.validateSurveyResponse(
          surveyResponse,
          questionMap,
          context.linkedRoleWeighting,
          row,
          context.surveyTxId,
          context.surveyDetails.endEpoch,
        );

        if (!validation.valid || !validation.responderRole) {
          invalidResponses += 1;
          continue;
        }

        const responderWeighting = context.linkedRoleWeighting[validation.responderRole];
        if (!responderWeighting) {
          invalidResponses += 1;
          continue;
        }

        selectedResponses.push({
          row,
          responderRole: validation.responderRole,
          weight: this.getResponseWeight(row, validation.responderRole, responderWeighting),
          answers: validation.answers,
        });
        picked = true;
        break;
      }
      if (!picked) {
        continue;
      }
    }

    const roleResults = Object.entries(context.linkedRoleWeighting).map(
      ([roleKey, weightingMode]) => {
        const responderRole = roleKey as ResponderRole;
        const roleResponses = selectedResponses.filter(
          (response) => response.responderRole === responderRole,
        );
        const roleSeen = responseRows.filter((row) => {
          const surveyResponse = row.metadata_json?.surveyResponse as
            | Record<string, unknown>
            | undefined;
          return surveyResponse?.responderRole === responderRole;
        }).length;

        const methodResults = context.surveyDetails.questions.map((question) => {
          const baseResult = {
            questionId: question.questionId,
            question: question.question,
            methodType: question.methodType,
          };

          if (
            question.methodType === 'urn:cardano:poll-method:single-choice:v1' ||
            question.methodType === 'urn:cardano:poll-method:multi-select:v1'
          ) {
            return {
              ...baseResult,
              options: question.options ?? [],
              optionTotals: Array.isArray(question.options)
                ? question.options.map(() => 0)
                : [],
            };
          }

          if (question.methodType === 'urn:cardano:poll-method:numeric-range:v1') {
            return {
              ...baseResult,
              count: 0,
              min: null,
              max: null,
              mean: null,
              weightedSum: 0,
              totalWeight: 0,
            };
          }

          return {
            ...baseResult,
            customValueTotals: {} as Record<string, number>,
          };
        });

        const methodResultByQuestionId = new Map(
          methodResults.map((entry) => [entry.questionId, entry]),
        );

        for (const response of roleResponses) {
          for (const answer of response.answers) {
            const question = questionMap.get(answer.questionId);
            const tallyEntry = methodResultByQuestionId.get(answer.questionId) as
              | Record<string, any>
              | undefined;

            if (!question || !tallyEntry) {
              continue;
            }

            if (
              question.methodType === 'urn:cardano:poll-method:single-choice:v1' ||
              question.methodType === 'urn:cardano:poll-method:multi-select:v1'
            ) {
              const selection = answer.selection ?? [];
              for (const selectedIndex of selection) {
                if (tallyEntry.optionTotals[selectedIndex] !== undefined) {
                  tallyEntry.optionTotals[selectedIndex] += response.weight;
                }
              }
              continue;
            }

            if (question.methodType === 'urn:cardano:poll-method:numeric-range:v1') {
              const value = Number(answer.numericValue);
              if (!Number.isFinite(value)) {
                continue;
              }
              tallyEntry.count += 1;
              tallyEntry.min =
                tallyEntry.min === null ? value : Math.min(tallyEntry.min, value);
              tallyEntry.max =
                tallyEntry.max === null ? value : Math.max(tallyEntry.max, value);
              tallyEntry.weightedSum += value * response.weight;
              tallyEntry.totalWeight += response.weight;
              tallyEntry.mean =
                tallyEntry.totalWeight > 0
                  ? tallyEntry.weightedSum / tallyEntry.totalWeight
                  : null;
              continue;
            }

            const customKey = this.stableSerialize(answer.customValue);
            tallyEntry.customValueTotals[customKey] =
              (tallyEntry.customValueTotals[customKey] ?? 0) + response.weight;
          }
        }

        return {
          responderRole,
          weightingMode,
          totals: {
            totalSeen: roleSeen,
            valid: roleResponses.length,
            invalid: Math.max(roleSeen - roleResponses.length, 0),
            deduped: Math.max(roleSeen - roleResponses.length, 0),
            uniqueResponders: roleResponses.length,
          },
          methodResults,
        };
      },
    );

    return {
      surveyTxId: context.surveyTxId,
      totals: {
        totalSeen: responseRows.length,
        valid: selectedResponses.length,
        invalid: invalidResponses,
        deduped: Math.max(responseRows.length - invalidResponses - selectedResponses.length, 0),
        uniqueResponders: selectedResponses.length,
      },
      roleResults,
      errors: [],
    };
  }

  private mapGovernanceActionProposals(
    govActionProposal: RawQueryGovernanceActionProposalType,
  ): GovernanceActionProposalType {
    return {
      id: parseInt(govActionProposal.id),
      txHash: govActionProposal.tx_hash,
      index: parseInt(govActionProposal.index),
      type: govActionProposal.type,
      details: govActionProposal.description,
      expiryDate: govActionProposal.expiration_time,
      expiryEpochNo: govActionProposal.expiration,
      createdDate: govActionProposal.time,
      createdEpochNo: govActionProposal.epoch_no,
      url: govActionProposal.url,
      metadataHash: govActionProposal.metadata_hash,
      protocolParams: govActionProposal.row_to_json,
      title: govActionProposal.title,
      abstract: govActionProposal.abstract,
      motivation: govActionProposal.motivation,
      rationale: govActionProposal.rationale,
      dRepYesVotes: parseInt(govActionProposal.yes_votes) || 0,
      dRepNoVotes: parseInt(govActionProposal.no_votes) || 0,
      dRepAbstainVotes: parseInt(govActionProposal.abstain_votes) || 0,
      poolYesVotes: parseInt(govActionProposal.pool_yes_votes) || 0,
      poolNoVotes: parseInt(govActionProposal.pool_no_votes) || 0,
      poolAbstainVotes: parseInt(govActionProposal.pool_abstain_votes) || 0,
      ccYesVotes: parseInt(govActionProposal.cc_yes_votes) || 0,
      ccNoVotes: parseInt(govActionProposal.cc_no_votes) || 0,
      ccAbstainVotes: parseInt(govActionProposal.cc_abstain_votes) || 0,
      prevGovActionIndex:
        parseInt(govActionProposal.prev_gov_action_index) || 0,
      prevGovActionTxHash: govActionProposal.prev_gov_action_tx_hash,
    };
  }
}
