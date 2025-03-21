import { ProposalVote } from '../models';
export interface VoteActionFormValues {
    vote: string;
}
export declare const useVoteActionFormController: () => import('react-hook-form').UseFormReturn<VoteActionFormValues, any, undefined>;
type Props = {
    previousVote?: ProposalVote;
    voteContextHash?: string;
    voteContextUrl?: string;
};
export declare const useVoteActionForm: ({ previousVote, voteContextHash, voteContextUrl, }: Props) => {
    confirmVote: (e?: import('react').BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    setValue: import('react-hook-form').UseFormSetValue<VoteActionFormValues>;
    vote: string | undefined;
    registerInput: import('react-hook-form').UseFormRegister<VoteActionFormValues>;
    isDirty: boolean;
    areFormErrors: boolean;
    isVoteLoading: boolean;
    canVote: boolean;
};
export {};
