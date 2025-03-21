export declare const useGetProposalQuery: (proposalId: string, enabled?: boolean) => {
    data: import('../../models').VotedProposal | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import('react-query').RefetchOptions & import('react-query').RefetchQueryFilters<TPageData>) | undefined) => Promise<import('react-query').QueryObserverResult<import('../../models').VotedProposal, unknown>>;
    isFetching: boolean;
};
