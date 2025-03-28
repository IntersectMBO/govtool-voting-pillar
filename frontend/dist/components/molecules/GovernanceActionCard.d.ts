import { FC } from 'react';
import { ProposalData } from '../../models';
type ActionTypeProps = Omit<ProposalData, 'yesVotes' | 'noVotes' | 'abstainVotes' | 'metadataHash' | 'url' | 'id' | 'details' | 'rationale' | 'motivation'> & {
    onClick?: () => void;
    inProgress?: boolean;
    isVoter?: boolean;
};
/**
 * Renders a card component for a governance action.
 *
 * @component
 * @param {ActionTypeProps} props - The props for the component.
 * @param {string} props.abstract - The abstract of the governance action.
 * @param {string} props.type - The type of the governance action.
 * @param {boolean} [props.inProgress=false] - Indicates if the governance action is in progress.
 * @param {string} props.expiryDate - The expiry date of the governance action.
 * @param {number} props.expiryEpochNo - The expiry epoch number of the governance action.
 * @param {Function} props.onClick - The click event handler for the component.
 * @param {string} props.createdDate - The created date of the governance action.
 * @param {number} props.createdEpochNo - The created epoch number of the governance action.
 * @param {string} props.txHash - The transaction hash of the governance action.
 * @param {number} props.index - The index of the governance action.
 * @param {string} props.metadataStatus - The metadata status of the governance action.
 * @param {boolean} props.metadataValid - Indicates if the metadata is valid.
 * @param {string} props.title - The title of the governance action.
 * @param {boolean} [props.isVoter=false] - Indicates if the user is a voter.
 * @returns {JSX.Element} The rendered component.
 */
export declare const GovernanceActionCard: FC<ActionTypeProps>;
export {};
