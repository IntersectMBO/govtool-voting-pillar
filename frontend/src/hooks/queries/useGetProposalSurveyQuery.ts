import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../../consts';
import { getProposalSurvey } from '../../services';
import { usePillarContext } from '../../context';

export const useGetProposalSurveyQuery = (
  proposalId: string,
  enabled = true
) => {
  const { apiUrl } = usePillarContext();

  const { data, isLoading, refetch, isRefetching } = useQuery(
    [QUERY_KEYS.useGetProposalSurveyKey, proposalId],
    () => getProposalSurvey(apiUrl, proposalId),
    {
      enabled: enabled && !!proposalId,
      staleTime: 60_000,
    }
  );

  return {
    data,
    isLoading,
    refetch,
    isFetching: isRefetching,
  };
};
