import axios from 'axios';
import { Infinite, ProposalData, ProposalDataDTO } from '../../models';

import { mapDtoToProposal } from '../../utils';

export type GetProposalsArguments = {
  dRepID?: string;
  filters?: string[];
  page?: number;
  pageSize?: number;
  sorting?: string;
  searchPhrase?: string;
};

export const getProposals = async (
  url: string,
  validationApiUrl: string,
  {
    dRepID = '',
    filters = [],
    page = 0,
    // It allows fetch proposals and if we have 7 items, display 6 cards and "view all" button
    pageSize = 7,
    searchPhrase = '',
    sorting = '',
  }: GetProposalsArguments
): Promise<Infinite<ProposalData>> => {
  if (!url) {
    throw new Error('URL is undefined');
  }
  const response = await axios.get<Infinite<ProposalDataDTO>>(
    `${url}/proposal/list`,
    {
      params: {
        page,
        pageSize,
        ...(searchPhrase && { search: searchPhrase }),
        ...(filters.length && { type: filters }),
        ...(sorting && { sort: sorting }),
        ...(dRepID && { drepId: dRepID }),
      },
    }
  );

  const validatedResponse = {
    ...response.data,
    elements: await Promise.all(
      response.data.elements.map((proposalDTO) =>
        mapDtoToProposal(validationApiUrl, proposalDTO)
      )
    ),
  };

  return validatedResponse;
};
