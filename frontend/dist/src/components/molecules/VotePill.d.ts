import { Vote } from '../../models';
/**
 * Renders a vote pill component.
 *
 * @param vote - The vote value.
 * @param width - The width of the vote pill.
 * @param maxWidth - The maximum width of the vote pill.
 * @param isCC - Indicates if the vote is for a constitutional case.
 * @returns The rendered vote pill component.
 */
export declare const VotePill: ({ vote, width, maxWidth, isCC, }: {
    vote: Vote;
    width?: number | undefined;
    maxWidth?: number | undefined;
    isCC?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
