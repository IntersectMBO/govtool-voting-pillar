import axios from 'axios';

import { ProposalDataDTO, VotedProposal } from '../../models';
import { mapDtoToProposal } from '../../utils';

export const getProposal = async (
  apiUrl: string,
  validationApiUrl: string,
  proposalId: string,
  drepId?: string
): Promise<VotedProposal> => {
  const encodedHash = encodeURIComponent(proposalId);

  const { data } = await axios.get<ProposalDataDTO>(
    `${apiUrl}/proposal/get/${encodedHash}?drepId=${drepId}`
  );

  return {
    ...data,
    proposal: await mapDtoToProposal(validationApiUrl, data),
  };
};
