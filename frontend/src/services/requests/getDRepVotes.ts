import axios from 'axios';

import { VotedProposal, VotedProposalDTO } from '../../models';
import { mapDtoToProposal } from '../../utils';

type GetDRepVotesParams = {
  type?: string[];
  sort?: string;
  search?: string;
};

export const getDRepVotes = async (
  apiUrl: string,
  validationApiUrl: string,
  {
    dRepID,
    params,
  }: {
    dRepID: string;
    params: GetDRepVotesParams;
  }
): Promise<VotedProposal[]> => {
  const { data } = await axios.get<VotedProposalDTO[]>(
    `${apiUrl}/drep/getVotes/${dRepID}`,
    { params }
  );

  const validatedData = await Promise.all(
    data.map(async (votedProposal) => ({
      ...votedProposal,
      proposal: await mapDtoToProposal(
        validationApiUrl,
        votedProposal.proposal
      ),
    }))
  );

  return validatedData;
};
