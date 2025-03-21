import { MetadataValidationStatus, ProposalData } from '../../models';
type GovernanceActionDetailsCardDataProps = {
    isDashboard?: boolean;
    isDataMissing: MetadataValidationStatus | null;
    isInProgress?: boolean;
    isOneColumn: boolean;
    isSubmitted?: boolean;
    proposal: ProposalData;
};
/**
 * Renders the details of a governance action card.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.isDashboard - Indicates if the component is rendered in a dashboard.
 * @param {boolean} props.isDataMissing - Indicates if the data for the governance action is missing.
 * @param {boolean} props.isInProgress - Indicates if the governance action is in progress.
 * @param {boolean} props.isOneColumn - Indicates if the component is rendered in a single column layout.
 * @param {boolean} props.isSubmitted - Indicates if the governance action has been submitted.
 * @param {object} props.proposal - The details of the governance action.
 * @param {string} props.proposal.abstract - The abstract of the governance action.
 * @param {string} props.proposal.createdDate - The date when the governance action was created.
 * @param {number} props.proposal.createdEpochNo - The epoch number when the governance action was created.
 * @param {string} props.proposal.details - The details of the governance action.
 * @param {string} props.proposal.expiryDate - The date when the governance action will expire.
 * @param {number} props.proposal.expiryEpochNo - The epoch number when the governance action will expire.
 * @param {number} props.proposal.index - The index of the governance action.
 * @param {string} props.proposal.motivation - The motivation behind the governance action.
 * @param {number} props.proposal.prevGovActionIndex - The index of the previous governance action.
 * @param {string} props.proposal.prevGovActionTxHash - The transaction hash of the previous governance action.
 * @param {string} props.proposal.rationale - The rationale behind the governance action.
 * @param {string[]} props.proposal.references - The references related to the governance action.
 * @param {string} props.proposal.title - The title of the governance action.
 * @param {string} props.proposal.txHash - The transaction hash of the governance action.
 * @param {string} props.proposal.url - The URL of the governance action.
 * @param {string} props.proposal.type - The type of the governance action.
 * @param {object} props.proposal.protocolParams - The protocol parameters of the governance action.
 *
 * @returns {JSX.Element} The rendered component.
 */
export declare const GovernanceActionDetailsCardData: ({ isDashboard, isDataMissing, isInProgress, isOneColumn, isSubmitted, proposal: { abstract, createdDate, createdEpochNo, details, expiryDate, expiryEpochNo, index, motivation, prevGovActionIndex, prevGovActionTxHash, rationale, references, title, txHash, url, type, protocolParams, }, }: GovernanceActionDetailsCardDataProps) => import("react/jsx-runtime").JSX.Element;
export {};
