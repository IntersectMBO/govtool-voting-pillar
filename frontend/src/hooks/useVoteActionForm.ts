import { useCallback, useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { PATHS } from '../consts';
import { useWalletErrorModal } from '../hooks';
import { ProposalVote } from '../models';
import { usePillarContext } from '../context';

export interface VoteActionFormValues {
  vote: string;
}

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
    buildVote,
    isPendingTransaction,
  } = usePillarContext();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const index = +hash.slice(1);
  const { proposalId: txHash } = useParams();
  const openWalletErrorModal = useWalletErrorModal();

  const {
    control,
    handleSubmit,
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

  const confirmVote = useCallback(
    async (values: VoteActionFormValues) => {
      if (!canVote) return;

      setIsLoading(true);

      const urlSubmitValue = voteContextUrl ?? '';
      const hashSubmitValue = voteContextHash ?? '';

      try {
        const isPendingTx = isPendingTransaction();
        if (isPendingTx) return;
        const votingBuilder = await buildVote(
          values.vote,
          txHash,
          index,
          urlSubmitValue,
          hashSubmitValue
        );
        const result = await buildSignSubmitConwayCertTx({
          votingBuilder,
          type: 'vote',
          resourceId: txHash + index,
        });
        if (result) {
          addSuccessAlert('Vote submitted');
          navigate(PATHS.governanceActions, {
            state: {
              isVotedListOnLoad: !!previousVote?.vote,
            },
          });
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
      addSuccessAlert,
      navigate,
      previousVote?.vote,
      openWalletErrorModal,
    ]
  );

  return {
    confirmVote: handleSubmit(confirmVote),
    setValue,
    vote,
    registerInput,
    isDirty,
    areFormErrors,
    isVoteLoading: isLoading,
    canVote,
  };
};