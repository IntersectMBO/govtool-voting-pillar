import { SubmittedVotesData } from '../../../models';
export interface SubmittedVotesModalState extends SubmittedVotesData {
    vote?: string;
}
/**
 * Represents a modal component for displaying submitted votes.
 * @param ref - A ref object that is forwarded to the underlying div element.
 * @returns The JSX element representing the submitted votes modal.
 */
export declare const SubmittedVotesModal: import('react').ForwardRefExoticComponent<import('react').RefAttributes<HTMLDivElement>>;
