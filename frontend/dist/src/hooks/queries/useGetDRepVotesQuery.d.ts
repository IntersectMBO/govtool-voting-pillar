import { VotedProposal } from '../../models';
export declare const useGetDRepVotesQuery: (type?: string[], sort?: string, search?: string) => {
    data: {
        title: string;
        actions: VotedProposal[];
    }[];
    areDRepVotesLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<VotedProposal[], unknown>>;
    isRefetching: boolean;
};
