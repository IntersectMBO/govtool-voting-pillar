type GovernanceActionsVotedOnProps = {
    filters: string[];
    searchPhrase?: string;
    sorting: string;
};
/**
 * Renders a component that displays the Governance Actions that the user has voted on.
 *
 * @param filters - The filters to apply to the Governance Actions.
 * @param searchPhrase - The search phrase to filter the Governance Actions.
 * @param sorting - The sorting options for the Governance Actions.
 * @returns The rendered component.
 */
export declare const GovernanceActionsVotedOn: ({ filters, searchPhrase, sorting, }: GovernanceActionsVotedOnProps) => import("react/jsx-runtime").JSX.Element;
export {};
