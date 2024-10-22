import { useInfiniteQuery } from 'react-query';

import { QUERY_KEYS } from '../../consts';
import { ProposalData } from '../../models';
import { getProposals, GetProposalsArguments } from '../../services';
import { usePillarContext } from '../../context';

export const useGetProposalsInfiniteQuery = ({
  filters = [],
  pageSize = 10,
  searchPhrase,
  sorting = '',
}: GetProposalsArguments) => {
  const { dRepID, isEnabled, pendingTransaction, apiUrl, validationApiUrl } =
    usePillarContext();

  const fetchProposals = async ({ pageParam = 0 }) => {
    const data = await getProposals(apiUrl, validationApiUrl, {
      dRepID,
      filters,
      page: pageParam,
      pageSize,
      searchPhrase,
      sorting,
    });

    return data;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    [
      QUERY_KEYS.useGetProposalsInfiniteKey,
      apiUrl,
      dRepID,
      filters,
      isEnabled,
      pendingTransaction.vote?.transactionHash,
      searchPhrase,
      sorting,
    ],
    fetchProposals,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.elements.length === 0) {
          return undefined;
        }
        return lastPage.page + 1;
      },
      refetchInterval: 20000,
    }
  );

  const proposals = data?.pages.flatMap(
    (page) => page.elements
  ) as ProposalData[];

  return {
    proposalsfetchNextPage: fetchNextPage,
    proposalsHaveNextPage: hasNextPage,
    isProposalsFetching: isFetching,
    isProposalsFetchingNextPage: isFetchingNextPage,
    isProposalsLoading: isLoading,
    proposals,
  };
};
