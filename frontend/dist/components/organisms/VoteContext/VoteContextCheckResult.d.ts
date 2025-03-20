import { Dispatch, SetStateAction } from 'react';
type VoteContextCheckResultProps = {
    submitVoteContext: () => void;
    closeModal: () => void;
    setStep: Dispatch<SetStateAction<number>>;
    errorMessage?: string;
    isContinueDisabled?: boolean;
};
/**
 * Renders the result of the vote context check.
 * @param {Object} props - The component props.
 * @param {Function} props.submitVoteContext - The function to submit the vote context.
 * @param {Function} props.closeModal - The function to close the modal.
 * @param {Function} props.setStep - The function to set the step.
 * @param {string} props.errorMessage - The error message, if any.
 * @param {boolean} props.isContinueDisabled - Indicates if the continue button is disabled.
 * @returns {JSX.Element} The rendered component.
 */
export declare const VoteContextCheckResult: ({ submitVoteContext, closeModal, setStep, errorMessage, isContinueDisabled, }: VoteContextCheckResultProps) => import("react/jsx-runtime").JSX.Element;
export {};
