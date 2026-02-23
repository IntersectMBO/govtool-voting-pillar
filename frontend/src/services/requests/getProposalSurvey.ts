import axios from 'axios';

import { ProposalSurveyResponse } from '../../models';

export const getProposalSurvey = async (
  apiUrl: string,
  proposalId: string
): Promise<ProposalSurveyResponse> => {
  const encodedProposalId = encodeURIComponent(proposalId);
  const response = await axios.get<ProposalSurveyResponse>(
    `${apiUrl}/proposal/survey/${encodedProposalId}`
  );
  return response.data;
};
