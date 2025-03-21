/// <reference types="react" />
export interface ExternalLinkModalState {
    externalLink: string;
}
/**
 * Represents a modal component for displaying an external link.
 * This component is used to warn users about opening external links and provides options to continue or cancel.
 *
 * @component
 * @example
 * ```tsx
 * <ExternalLinkModal />
 * ```
 */
export declare const ExternalLinkModal: import('react').ForwardRefExoticComponent<import('react').RefAttributes<HTMLDivElement>>;
