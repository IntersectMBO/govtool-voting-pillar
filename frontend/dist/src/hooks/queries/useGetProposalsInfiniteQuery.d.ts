import { ProposalData } from '../../models';
import { GetProposalsArguments } from '../../services';
export declare const useGetProposalsInfiniteQuery: ({ filters, pageSize, searchPhrase, sorting, }: GetProposalsArguments) => {
    proposalsfetchNextPage: (options?: import("react-query").FetchNextPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<import("../../models").Infinite<ProposalData>, unknown>>;
    proposalsHaveNextPage: boolean | undefined;
    isProposalsFetching: boolean;
    isProposalsFetchingNextPage: boolean;
    isProposalsLoading: boolean;
    proposals: ProposalData[];
};
