import { MetadataValidationStatus, ProposalData, ProposalVote } from '../../models';
type GovernanceActionDetailsCardProps = {
    isDashboard?: boolean;
    isDataMissing: null | MetadataValidationStatus;
    isInProgress?: boolean;
    isVoter?: boolean;
    vote?: ProposalVote;
    proposal: ProposalData;
};
/**
 * Renders the Governance Action Details Card component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isDashboard - Indicates if the component is rendered in the dashboard.
 * @param {boolean} props.isDataMissing - Indicates if there is missing data.
 * @param {boolean} props.isInProgress - Indicates if the action is in progress.
 * @param {boolean} [props.isVoter=true] - Indicates if the user is a voter.
 * @param {Function} props.vote - The vote function.
 * @param {Object} props.proposal - The proposal object.
 * @returns {JSX.Element} The rendered Governance Action Details Card component.
 */
export declare const GovernanceActionDetailsCard: ({ isDashboard, isDataMissing, isInProgress, isVoter, vote, proposal, }: GovernanceActionDetailsCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
