type EmptyStateGovernanceActionsCategoryProps = {
    category?: string;
    isSearch?: boolean;
};
/**
 * Renders the empty state message for the GovernanceActionsCategory component.
 *
 * @param {EmptyStateGovernanceActionsCategoryProps} props - The component props.
 * @param {string} props.category - The category of the governance actions.
 * @param {boolean} props.isSearch - Indicates if the empty state is for a search result.
 * @returns {JSX.Element} The rendered empty state message.
 */
export declare const EmptyStateGovernanceActionsCategory: ({ category, isSearch, }: EmptyStateGovernanceActionsCategoryProps) => import("react/jsx-runtime").JSX.Element;
export {};
