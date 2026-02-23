import axios from 'axios';

import { ProposalSurveyTallyResponse } from '../../models';

export const getProposalSurveyTally = async (
  apiUrl: string,
  proposalId: string,
  weighting: 'CredentialBased' | 'StakeBased' = 'CredentialBased'
): Promise<ProposalSurveyTallyResponse> => {
  const encodedProposalId = encodeURIComponent(proposalId);
  const response = await axios.get<ProposalSurveyTallyResponse>(
    `${apiUrl}/proposal/survey/${encodedProposalId}/tally`,
    {
      params: { weighting },
    }
  );
  return response.data;
};
