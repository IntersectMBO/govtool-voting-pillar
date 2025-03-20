import { FC, PropsWithChildren } from 'react';
type VoteContextWrapperProps = {
    onContinue: () => void;
    isContinueDisabled?: boolean;
    onCancel: () => void;
};
/**
 * Wrapper component for the VoteContext.
 *
 * @component
 * @param {PropsWithChildren<VoteContextWrapperProps>} props - The component props.
 * @param {Function} props.onContinue - The function to be called when the "Continue" button is clicked.
 * @param {boolean} props.isContinueDisabled - A boolean indicating whether the "Continue" button should be disabled.
 * @param {Function} props.onCancel - The function to be called when the "Cancel" button is clicked.
 * @param {ReactNode} props.children - The child components to be rendered inside the wrapper.
 * @returns {JSX.Element} The rendered VoteContextWrapper component.
 */
export declare const VoteContextWrapper: FC<PropsWithChildren<VoteContextWrapperProps>>;
export {};
