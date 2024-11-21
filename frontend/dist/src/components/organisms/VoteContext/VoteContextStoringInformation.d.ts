import { Dispatch, SetStateAction } from 'react';
type VoteContextStoringInformationProps = {
    setStep: Dispatch<SetStateAction<number>>;
    setSavedHash: Dispatch<SetStateAction<string | null>>;
    setErrorMessage: Dispatch<SetStateAction<string | undefined>>;
    onCancel: () => void;
};
/**
 * Renders the component for storing information in the vote context.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setStep - The function to set the current step.
 * @param {Function} props.setSavedHash - The function to set the saved hash.
 * @param {Function} props.setErrorMessage - The function to set the error message.
 * @param {Function} props.onCancel - The function to handle cancel action.
 * @returns {JSX.Element} The rendered component.
 */
export declare const VoteContextStoringInformation: ({ setStep, setSavedHash, setErrorMessage, onCancel, }: VoteContextStoringInformationProps) => import("react/jsx-runtime").JSX.Element;
export {};
