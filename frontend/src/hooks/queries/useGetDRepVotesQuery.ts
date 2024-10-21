import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../../consts';
import { getDRepVotes } from '../../services';
import { VotedProposal } from '../../models';
import { usePillarContext } from '../../context';

export const useGetDRepVotesQuery = (
  type?: string[],
  sort?: string,
  search?: string
) => {
  const { dRepID, pendingTransaction, apiUrl, validationApiUrl } =
    usePillarContext();

  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: [
      QUERY_KEYS.useGetDRepVotesKey,
      pendingTransaction.vote?.transactionHash,
      type,
      sort,
      search,
    ],
    queryFn: () =>
      getDRepVotes(apiUrl, validationApiUrl, {
        dRepID,
        params: {
          ...(search && { search }),
          ...(sort && { sort }),
          ...(type && { type }),
        },
      }),
    enabled: !!dRepID,
  });

  const groupedByType = data?.reduce((groups, item) => {
    const itemType = item?.proposal.type;

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-expect-error
    if (!groups[itemType]) {
      // @ts-expect-error
      groups[itemType] = {
        title: itemType,
        actions: [],
      };
    }
    // @ts-expect-error
    groups[itemType].actions.push(item);
    /* eslint-enable @typescript-eslint/ban-ts-comment */

    return groups;
  }, {});

  return {
    data: Object.values(groupedByType ?? []) as {
      title: string;
      actions: VotedProposal[];
    }[],
    areDRepVotesLoading: isLoading,
    refetch,
    isRefetching,
  };
};
