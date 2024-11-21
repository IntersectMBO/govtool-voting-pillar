import { ProposalData } from '../../models';
type GovernanceActionsToVoteProps = {
    filters: string[];
    sorting: string;
    proposals: {
        title: string;
        actions: ProposalData[];
    }[];
    onDashboard?: boolean;
    searchPhrase?: string;
};
/**
 * Renders a component that displays governance actions to vote on.
 *
 * @param filters - The filters to apply to the governance actions.
 * @param onDashboard - A boolean indicating whether the component is being rendered on the dashboard.
 * @param proposals - An array of proposal data.
 * @param searchPhrase - The search phrase to filter the governance actions.
 * @param sorting - The sorting option for the governance actions.
 * @returns The rendered component.
 */
export declare const GovernanceActionsToVote: ({ filters, onDashboard, proposals, searchPhrase, sorting, }: GovernanceActionsToVoteProps) => import("react/jsx-runtime").JSX.Element;
export {};
