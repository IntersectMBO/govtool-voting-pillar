import { Dispatch, SetStateAction } from 'react';
export type VoteContextFormValues = {
    voteContextText: string;
    terms?: boolean;
    storingURL: string;
};
export declare const useVoteContextForm: (setSavedHash?: Dispatch<SetStateAction<string | null>>, setStep?: Dispatch<SetStateAction<number>>, setErrorMessage?: Dispatch<SetStateAction<string | undefined>>) => {
    control: import('react-hook-form').Control<VoteContextFormValues, any>;
    validateURL: (e?: import('react').BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    errors: import('react-hook-form').FieldErrors<VoteContextFormValues>;
    generateMetadata: () => void;
    getValues: import('react-hook-form').UseFormGetValues<VoteContextFormValues>;
    isValid: boolean;
    onClickDownloadJson: () => void;
    register: import('react-hook-form').UseFormRegister<VoteContextFormValues>;
    reset: import('react-hook-form').UseFormReset<VoteContextFormValues>;
    setValue: import('react-hook-form').UseFormSetValue<VoteContextFormValues>;
    watch: import('react-hook-form').UseFormWatch<VoteContextFormValues>;
    hash: string | null;
};
