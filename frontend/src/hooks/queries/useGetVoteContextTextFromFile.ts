import { useQuery } from 'react-query';

import { getVoteContextTextFromFile } from '../../services';
import { QUERY_KEYS } from '../../consts';

export const useGetVoteContextTextFromFile = (
  url: string | undefined,
  enabled = true
) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.useGetVoteContextFromFile, url],
    () => getVoteContextTextFromFile(url),
    {
      enabled,
    }
  );

  return { voteContextText: data, isLoading };
};
