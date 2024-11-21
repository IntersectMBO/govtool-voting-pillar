import { Dispatch, SetStateAction } from 'react';
import { ProposalData, ProposalVote } from '../../models';
type VoteActionFormProps = {
    setIsVoteSubmitted: Dispatch<SetStateAction<boolean>>;
    isInProgress?: boolean;
    previousVote?: ProposalVote;
    proposal: ProposalData;
};
/**
 * VoteActionForm component represents a form for voting on a proposal.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.setIsVoteSubmitted - A function to set the state of whether the vote is submitted.
 * @param {Object} props.previousVote - The previous vote object.
 * @param {boolean} props.isInProgress - A flag indicating whether the voting is in progress.
 * @param {Object} props.proposal - The proposal object.
 * @param {string} props.proposal.expiryDate - The expiry date of the proposal.
 * @param {number} props.proposal.expiryEpochNo - The expiry epoch number of the proposal.
 * @returns {JSX.Element} The rendered VoteActionForm component.
 */
export declare const VoteActionForm: ({ setIsVoteSubmitted, previousVote, isInProgress, proposal, proposal: { expiryDate, expiryEpochNo }, }: VoteActionFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
