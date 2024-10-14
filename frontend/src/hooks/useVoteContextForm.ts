import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { usePillarContext } from '../context';
import { downloadJson } from '../utils';
import { MetadataValidationStatus } from '../models';

export type VoteContextFormValues = {
  voteContextText: string;
  terms?: boolean;
  storingURL: string;
};

export const useVoteContextForm = (
  setSavedHash?: Dispatch<SetStateAction<string | null>>,
  setStep?: Dispatch<SetStateAction<number>>,
  setErrorMessage?: Dispatch<SetStateAction<string | undefined>>
) => {
  const { validateMetadata, generateMetadata, createJsonLD, createHash } =
    usePillarContext();
  const [hash, setHash] = useState<string | null>(null);

  const {
    control,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    setValue,
    watch,
    register,
    reset,
  } = useFormContext<VoteContextFormValues>();

  const onClickDownloadJson = () => {
    const json = createJsonLD(getValues());
    setHash(createHash(json));
    downloadJson(json, 'Vote_Context');
  };

  const onSubmit = useCallback(
    async (data: VoteContextFormValues) => {
      try {
        if (!hash) throw new Error('Hash is not generated');

        await validateMetadata(data.storingURL, hash);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
        // Replace with correct one
        setErrorMessage?.(MetadataValidationStatus.INCORRECT_FORMAT);
      } finally {
        if (setSavedHash) setSavedHash(hash);
        if (setStep) setStep(4);
      }
    },
    [hash, setErrorMessage, setSavedHash, setStep, validateMetadata]
  );

  return {
    control,
    validateURL: handleSubmit(onSubmit),
    errors,
    generateMetadata,
    getValues,
    isValid,
    onClickDownloadJson,
    register,
    reset,
    setValue,
    watch,
    hash,
  };
};
