/// <reference types="react" />
export interface StatusModalState {
    buttonText?: string;
    cancelText?: string;
    feedbackText?: string;
    status: 'warning' | 'info' | 'success';
    isInfo?: boolean;
    link?: string;
    linkText?: string;
    message: React.ReactNode;
    onSubmit?: () => void;
    onCancel?: () => void;
    onFeedback?: () => void;
    title: string;
    dataTestId: string;
}
/**
 * Represents a modal component used for displaying status information.
 *
 * @component
 * @example
 * ```tsx
 * <StatusModal />
 * ```
 */
export declare const StatusModal: import("react").ForwardRefExoticComponent<import("react").RefAttributes<HTMLDivElement>>;
