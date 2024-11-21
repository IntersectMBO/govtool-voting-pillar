export type VoteContextModalState = {
    onSubmit: (url: string, hash: string | null, voteContextText: string) => void;
};
/**
 * Represents a modal component for voting context.
 *
 * @returns The rendered VoteContextModal component.
 */
export declare const VoteContextModal: () => import("react/jsx-runtime").JSX.Element;
