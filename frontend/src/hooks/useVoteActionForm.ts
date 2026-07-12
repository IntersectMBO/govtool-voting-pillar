import { useCallback, useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { encodeMetadata, type SurveyResponse } from 'cip-179';
import { PATHS } from '../consts';
import { useWalletErrorModal } from '../hooks';
import { ProposalVote } from '../models';
import { usePillarContext } from '../context';
import type { Cip179Participation } from '../cip179/Cip179Survey';

export interface VoteActionFormValues {
  vote: string;
}

export const useVoteActionFormController = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        vote: Yup.string().oneOf(['yes', 'no', 'abstain']).required(),
      }),
    []
  );

  return useForm<VoteActionFormValues>({
    defaultValues: { vote: '' },
    mode: 'onChange',
    resolver: yupResolver<VoteActionFormValues>(validationSchema),
  });
};

type Props = {
  previousVote?: ProposalVote;
  voteContextHash?: string;
  voteContextUrl?: string;
  cip179?: Cip179Participation;
};

export const useVoteActionForm = ({
  previousVote,
  voteContextHash,
  voteContextUrl,
  cip179,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    addSuccessAlert,
    buildSignSubmitConwayCertTx,
    buildVote,
    cip179MetadatumCodec,
    isPendingTransaction,
    useLocation,
    useParams,
    useRouter,
  } = usePillarContext();
  const router = useRouter();
  const { hash } = useLocation();
  const index = +hash.slice(1);
  const { proposalId: txHash } = useParams('/governance_actions/[hash]');
  const openWalletErrorModal = useWalletErrorModal();

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    setValue,
    register: registerInput,
  } = useVoteActionFormController();

  const { vote } = useWatch({
    control,
  });

  const areFormErrors = !!errors.vote;

  const canVote =
    txHash !== undefined &&
    txHash !== null &&
    index !== undefined &&
    index !== null &&
    !areFormErrors &&
    (previousVote?.vote !== vote || cip179?.participating === true) &&
    (!cip179?.participating || cip179.valid);

  const confirmVote = useCallback(
    async (values: VoteActionFormValues) => {
      if (!canVote) return;

      setIsLoading(true);

      const urlSubmitValue = voteContextUrl ?? '';
      const hashSubmitValue = voteContextHash ?? '';

      try {
        const isPendingTx = isPendingTransaction?.();
        if (isPendingTx) return;
        const votingBuilder = await buildVote?.(
          values.vote,
          txHash,
          index,
          urlSubmitValue,
          hashSubmitValue
        );
        let surveyResponse: SurveyResponse | null = cip179?.response ?? null;
        if (
          surveyResponse &&
          cip179?.definition?.submissionMode.type === 'sealed' &&
          surveyResponse.answers.type === 'public'
        ) {
          const { isQuicknet, sealAnswers } = await import('cip-179/tlock');
          const mode = cip179.definition.submissionMode;
          if (!isQuicknet(mode.chainHash)) {
            throw new Error(
              'This sealed survey uses an unsupported drand network'
            );
          }
          if (!cip179MetadatumCodec) {
            throw new Error(
              'The host application has not configured a metadatum codec'
            );
          }
          const ciphertext = await sealAnswers(
            cip179MetadatumCodec,
            surveyResponse.answers.answers,
            mode.round,
            mode.paddingSize
          );
          surveyResponse = {
            ...surveyResponse,
            answers: { type: 'sealed', ciphertext },
          };
        }
        const encodedMetadata = surveyResponse
          ? encodeMetadata({ type: 'responses', responses: [surveyResponse] })
          : undefined;
        const transactionMetadata =
          encodedMetadata instanceof Map ? encodedMetadata : undefined;
        const result = await buildSignSubmitConwayCertTx?.({
          votingBuilder,
          type: 'vote',
          resourceId: txHash + index,
          transactionMetadata,
        });
        if (result) {
          addSuccessAlert('Vote submitted');
          router.push(PATHS.governanceActions);
        }
      } catch (error) {
        openWalletErrorModal({
          error,
          dataTestId: 'vote-transaction-error-modal',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [
      canVote,
      voteContextUrl,
      voteContextHash,
      isPendingTransaction,
      buildVote,
      txHash,
      index,
      buildSignSubmitConwayCertTx,
      addSuccessAlert,
      router,
      openWalletErrorModal,
      cip179,
      cip179MetadatumCodec,
    ]
  );

  return {
    confirmVote: handleSubmit(confirmVote),
    setValue,
    vote,
    registerInput,
    isDirty,
    areFormErrors,
    isVoteLoading: isLoading,
    canVote,
  };
};
