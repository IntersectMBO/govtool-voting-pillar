import { VotedProposal } from '../../models';
type GetDRepVotesParams = {
    type?: string[];
    sort?: string;
    search?: string;
};
export declare const getDRepVotes: (apiUrl: string, validationApiUrl: string, { dRepID, params, }: {
    dRepID: string;
    params: GetDRepVotesParams;
}) => Promise<VotedProposal[]>;
export {};
