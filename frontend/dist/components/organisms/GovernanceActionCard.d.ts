import { FC } from 'react';
import { ProposalData } from '../../models';
type ActionTypeProps = Omit<ProposalData, 'yesVotes' | 'noVotes' | 'abstainVotes' | 'metadataHash' | 'url' | 'id' | 'details' | 'rationale' | 'motivation'> & {
    onClick?: () => void;
    inProgress?: boolean;
    isVoter?: boolean;
};
/**
 * Represents a card component for displaying governance actions.
 *
 * @component
 * @param {ActionTypeProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
export declare const GovernanceActionCard: FC<ActionTypeProps>;
export {};
