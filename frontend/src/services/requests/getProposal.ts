import axios from 'axios';
import { VotedProposal, VotedProposalDTO } from '../../models';
import { mapDtoToProposal } from '../../utils';

export const getProposal = async (
  apiUrl: string,
  validationApiUrl: string,
  proposalId: string,
  drepId?: string
): Promise<VotedProposal> => {
  const encodedHash = encodeURIComponent(proposalId);

  const { data } = await axios.get<VotedProposalDTO>(
    `${apiUrl}/proposal/get/${encodedHash}?drepId=${drepId}`
  );

  return {
    ...data,
    proposal: await mapDtoToProposal(validationApiUrl, data.proposal),
  };
};
