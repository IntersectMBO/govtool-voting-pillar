import { VotedProposal } from '../../models';
export declare const getProposal: (apiUrl: string, validationApiUrl: string, proposalId: string, drepId?: string) => Promise<VotedProposal>;
