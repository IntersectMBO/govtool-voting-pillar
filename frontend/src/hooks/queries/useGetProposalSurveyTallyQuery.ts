import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../../consts';
import { getProposalSurveyTally } from '../../services';
import { usePillarContext } from '../../context';

export const useGetProposalSurveyTallyQuery = (
  proposalId: string,
  weighting: 'CredentialBased' | 'StakeBased' = 'CredentialBased',
  enabled = true
) => {
  const { apiUrl } = usePillarContext();

  const { data, isLoading, refetch, isRefetching } = useQuery(
    [QUERY_KEYS.useGetProposalSurveyTallyKey, proposalId, weighting],
    () => getProposalSurveyTally(apiUrl, proposalId, weighting),
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
