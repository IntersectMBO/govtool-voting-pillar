import { Dispatch, SetStateAction } from 'react';
type VoteContextTextProps = {
    setStep: Dispatch<SetStateAction<number>>;
    onCancel: () => void;
};
/**
 * Renders the vote context text component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setStep - The function to set the current step.
 * @param {Function} props.onCancel - The function to handle cancel action.
 * @returns {JSX.Element} The rendered component.
 */
export declare const VoteContextText: ({ setStep, onCancel, }: VoteContextTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
