import { useCallback, useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { PATHS } from '../consts';
import { useWalletErrorModal } from '../hooks';
import { ProposalVote } from '../models';
import { usePillarContext } from '../context';

export interface VoteActionFormValues {
  vote: string;
}

export type SurveyResponsePayload = {
  specVersion: string;
  surveyTxId: string;
  responderRole: 'DRep' | 'SPO' | 'CC' | 'Stakeholder';
  answers: {
    questionId: string;
    selection?: number[];
    numericValue?: number;
    customValue?: unknown;
  }[];
};

export const useVoteActionFormController = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        vote: Yup.string().oneOf(['yes', 'no', 'abstain']).required(),
      }),
    []
  );

  return useForm<VoteActionFormValues>({
    defaultValues: { vote: '' },
    mode: 'onChange',
    resolver: yupResolver<VoteActionFormValues>(validationSchema),
  });
};

type Props = {
  previousVote?: ProposalVote;
  voteContextHash?: string;
  voteContextUrl?: string;
};

export const useVoteActionForm = ({
  previousVote,
  voteContextHash,
  voteContextUrl,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    addSuccessAlert,
    buildSignSubmitConwayCertTx,
    buildMetadataAuxiliaryData,
    buildVote,
    isPendingTransaction,
    useLocation,
    useParams,
    useRouter,
  } = usePillarContext();
  const router = useRouter();
  const { hash } = useLocation();
  const index = +hash.slice(1);
  const { proposalId: txHash } = useParams('/governance_actions/[hash]');
  const openWalletErrorModal = useWalletErrorModal();

  const {
    control,
    formState: { errors, isDirty },
    setValue,
    register: registerInput,
  } = useVoteActionFormController();

  const { vote } = useWatch({
    control,
  });

  const areFormErrors = !!errors.vote;

  const canVote =
    txHash !== undefined &&
    txHash !== null &&
    index !== undefined &&
    index !== null &&
    !areFormErrors &&
    previousVote?.vote !== vote;

  const submitVote = useCallback(
    async (
      values: VoteActionFormValues,
      surveyResponse?: SurveyResponsePayload | null
    ) => {
      if (!canVote || !values.vote) return;

      setIsLoading(true);

      const urlSubmitValue = voteContextUrl ?? '';
      const hashSubmitValue = voteContextHash ?? '';

      try {
        const isPendingTx = isPendingTransaction?.();
        if (isPendingTx) return;
        const votingBuilder = await buildVote?.(
          values.vote,
          txHash,
          index,
          urlSubmitValue,
          hashSubmitValue
        );

        if (surveyResponse && !buildMetadataAuxiliaryData) {
          throw new Error(
            'Wallet context does not support building auxiliary metadata.'
          );
        }

        const auxiliaryData =
          surveyResponse && buildMetadataAuxiliaryData
            ? buildMetadataAuxiliaryData(17, { surveyResponse })
            : undefined;

        const result = await buildSignSubmitConwayCertTx?.({
          votingBuilder,
          type: 'vote',
          resourceId: txHash + index,
          auxiliaryData,
        });
        if (result) {
          addSuccessAlert('Vote submitted');
          router.push(PATHS.governanceActions);
        }
      } catch (error) {
        openWalletErrorModal({
          error,
          dataTestId: 'vote-transaction-error-modal',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [
      canVote,
      voteContextUrl,
      voteContextHash,
      isPendingTransaction,
      buildVote,
      txHash,
      index,
      buildSignSubmitConwayCertTx,
      buildMetadataAuxiliaryData,
      addSuccessAlert,
      router,
      openWalletErrorModal,
    ]
  );

  const confirmVote = useCallback(
    async (surveyResponse?: SurveyResponsePayload | null) => {
      const selectedVote = vote as VoteActionFormValues['vote'];
      await submitVote(
        {
          vote: selectedVote,
        },
        surveyResponse
      );
    },
    [submitVote, vote]
  );

  return {
    confirmVote,
    setValue,
    vote,
    registerInput,
    isDirty,
    areFormErrors,
    isVoteLoading: isLoading,
    canVote,
  };
};
