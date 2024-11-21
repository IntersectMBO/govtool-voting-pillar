import { Dispatch, SetStateAction } from 'react';
import { ProposalData, ProposalVote } from '../../models';
type GovernanceActionCardVotesProps = {
    setIsVoteSubmitted: Dispatch<SetStateAction<boolean>>;
    isOneColumn: boolean;
    isDashboard?: boolean;
    isInProgress?: boolean;
    isVoter?: boolean;
    vote?: ProposalVote;
    proposal: ProposalData;
};
export declare const GovernanceActionDetailsCardVotes: ({ setIsVoteSubmitted, isOneColumn, isVoter, vote, isDashboard, isInProgress, proposal, }: GovernanceActionCardVotesProps) => import("react/jsx-runtime").JSX.Element;
export {};
