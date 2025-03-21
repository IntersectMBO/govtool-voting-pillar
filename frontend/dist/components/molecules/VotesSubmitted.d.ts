import { SubmittedVotesData } from '../../models';
type Props = {
    votes: SubmittedVotesData;
};
/**
 * Renders the component that displays the votes submitted for a governance action.
 *
 * @component
 * @param {Props} votes - The votes object containing the vote counts for different categories.
 * @returns {JSX.Element} The rendered VotesSubmitted component.
 */
export declare const VotesSubmitted: ({ votes: { dRepYesVotes, dRepAbstainVotes, dRepNoVotes, poolYesVotes, poolAbstainVotes, poolNoVotes, ccYesVotes, ccAbstainVotes, ccNoVotes, }, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
