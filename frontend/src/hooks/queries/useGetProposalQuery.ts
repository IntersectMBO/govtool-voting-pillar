import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../../consts';
import { getProposal } from '../../services';
import { usePillarContext } from '../../context';

export const useGetProposalQuery = (proposalId: string, enabled?: boolean) => {
  const { dRepID, apiUrl, validationApiUrl } = usePillarContext();

  const { data, isLoading, refetch, isRefetching } = useQuery(
    [QUERY_KEYS.useGetProposalKey, dRepID, proposalId],
    () => getProposal(apiUrl, validationApiUrl, proposalId, dRepID),
    {
      staleTime: Infinity,
      enabled,
    }
  );

  return {
    data,
    isLoading,
    refetch,
    isFetching: isRefetching,
  };
};
