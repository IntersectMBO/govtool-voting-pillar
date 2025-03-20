import { Dispatch, SetStateAction } from 'react';
type StoreDataInfoProps = {
    setStep: Dispatch<SetStateAction<number>>;
    onCancel: () => void;
};
/**
 * Renders the VoteContextTerms component.
 *
 * @param {StoreDataInfoProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
export declare const VoteContextTerms: ({ setStep, onCancel }: StoreDataInfoProps) => import("react/jsx-runtime").JSX.Element;
export {};
