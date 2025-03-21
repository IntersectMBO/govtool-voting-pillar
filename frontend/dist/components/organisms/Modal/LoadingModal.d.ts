/// <reference types="react" />
export interface LoadingModalState {
    message: React.ReactNode;
    title: string;
    dataTestId: string;
}
/**
 * Represents a loading modal component.
 * This component displays a loading spinner and a message while content is being loaded.
 *
 * @component
 * @example
 * ```tsx
 * <LoadingModal />
 * ```
 */
export declare const LoadingModal: import('react').ForwardRefExoticComponent<import('react').RefAttributes<HTMLDivElement>>;
