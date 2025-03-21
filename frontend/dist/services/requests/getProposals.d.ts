import { Infinite, ProposalData } from '../../models';
export type GetProposalsArguments = {
    dRepID?: string;
    filters?: string[];
    page?: number;
    pageSize?: number;
    sorting?: string;
    searchPhrase?: string;
};
export declare const getProposals: (apiUrl: string, validationApiUrl: string, { dRepID, filters, page, pageSize, searchPhrase, sorting, }: GetProposalsArguments) => Promise<Infinite<ProposalData>>;
