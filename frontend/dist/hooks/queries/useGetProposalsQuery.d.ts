import { GetProposalsArguments } from '../../services';
export declare const useGetProposalsQuery: ({ filters, searchPhrase, sorting, }: GetProposalsArguments) => {
    isProposalsLoading: boolean;
    proposals: {
        title: string;
        actions: ActionTypeToDisplay[];
    }[];
};
