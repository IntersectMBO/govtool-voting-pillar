import { useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/material';

import { Button, Radio, Typography } from '../atoms';
import { orange } from '../../consts';
import { useModal, usePillarContext } from '../../context';
import {
  useScreenDimension,
  useGetVoteContextTextFromFile,
  useVoteActionForm,
} from '../../hooks';
import { formatDisplayDate } from '../../utils';
import { ProposalData, ProposalVote } from '../../models';
import { VoteContextModalState, SubmittedVotesModalState } from '../organisms';

type VoteActionFormProps = {
  setIsVoteSubmitted: Dispatch<SetStateAction<boolean>>;
  isInProgress?: boolean;
  previousVote?: ProposalVote;
  proposal: ProposalData;
};

/**
 * VoteActionForm component represents a form for voting on a proposal.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.setIsVoteSubmitted - A function to set the state of whether the vote is submitted.
 * @param {Object} props.previousVote - The previous vote object.
 * @param {boolean} props.isInProgress - A flag indicating whether the voting is in progress.
 * @param {Object} props.proposal - The proposal object.
 * @param {string} props.proposal.expiryDate - The expiry date of the proposal.
 * @param {number} props.proposal.expiryEpochNo - The expiry epoch number of the proposal.
 * @returns {JSX.Element} The rendered VoteActionForm component.
 */
export const VoteActionForm = ({
  setIsVoteSubmitted,
  previousVote,
  isInProgress,
  proposal,
  proposal: { expiryDate, expiryEpochNo },
}: VoteActionFormProps) => {
  const [voteContextHash, setVoteContextHash] = useState<string | undefined>();
  const [voteContextUrl, setVoteContextUrl] = useState<string | undefined>();
  const [showWholeVoteContext, setShowWholeVoteContext] =
    useState<boolean>(false);

  const { voter } = usePillarContext();
  const { voteContextText } = useGetVoteContextTextFromFile(voteContextUrl);

  const { isMobile, screenWidth } = useScreenDimension();
  const { openModal } = useModal();

  const {
    areFormErrors,
    confirmVote,
    isDirty,
    isVoteLoading,
    registerInput,
    setValue,
    vote,
    canVote,
  } = useVoteActionForm({ previousVote, voteContextHash, voteContextUrl });

  const setVoteContextData = (url: string, hash: string | null) => {
    setVoteContextUrl(url);
    setVoteContextHash(hash ?? undefined);
  };

  useEffect(() => {
    if (previousVote?.vote) {
      setValue('vote', previousVote.vote);
      setIsVoteSubmitted(true);
    }
  }, [previousVote?.vote, setValue, setIsVoteSubmitted]);

  useEffect(() => {
    if (previousVote?.url) {
      setVoteContextUrl(previousVote.url);
    }
  }, [previousVote?.url, setVoteContextUrl]);

  const renderCancelButton = useMemo(
    () => (
      <Button
        data-testid="cancel-button"
        onClick={() => setValue('vote', previousVote?.vote ?? '')}
        variant="outlined"
        size="extraLarge"
        sx={{
          width: '100%',
        }}
      >
        Cancel
      </Button>
    ),
    [previousVote?.vote, setValue]
  );

  const renderChangeVoteButton = useMemo(
    () => (
      <Button
        data-testid="change-vote"
        onClick={confirmVote}
        disabled={!canVote}
        isLoading={isVoteLoading}
        variant="contained"
        sx={{
          borderRadius: 50,
          textTransform: 'none',
          width: '100%',
          height: 48,
        }}
      >
        Change vote
      </Button>
    ),
    [confirmVote, canVote, isVoteLoading]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'full',
        ...(isInProgress && { opacity: 0.5 }),
      }}
    >
      <Box flex={1} display="flex" flexDirection="column" alignItems="center">
        {previousVote?.date ? (
          <>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: 'pre-line',
                fontWeight: 400,
                mb: 1,
                alignSelf: 'start',
              }}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{
                  whiteSpace: 'pre-line',
                  fontWeight: 600,
                  mb: 1,
                  alignSelf: 'start',
                }}
              >
                {`You voted ${previousVote?.vote.toLocaleUpperCase()} on this proposal`}
              </Typography>
              <Typography
                sx={{
                  whiteSpace: 'pre-line',
                  fontWeight: 400,
                  mb: 1,
                  alignSelf: 'start',
                }}
              >
                {`on ${formatDisplayDate(previousVote.date)} (Epoch ${previousVote.epochNo})`}
              </Typography>
            </Typography>
            <Typography
              variant="caption"
              sx={{ lineHeight: '18px', alignSelf: 'start' }}
            >
              {`You can change your vote up to ${expiryDate} (Epoch ${expiryEpochNo})`}
            </Typography>
          </>
        ) : (
          <Typography variant="body1">Choose how you want to vote:</Typography>
        )}
        <Box
          mt={3}
          sx={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Radio
            dataTestId="yes-radio"
            isChecked={vote?.toLowerCase() === 'yes'}
            name="vote"
            register={registerInput}
            setValue={setValue}
            title="Yes"
            value="yes"
            disabled={isInProgress}
          />
          <Radio
            dataTestId="no-radio"
            isChecked={vote?.toLowerCase() === 'no'}
            name="vote"
            register={registerInput}
            setValue={setValue}
            title="No"
            value="no"
            disabled={isInProgress}
          />
          <Radio
            dataTestId="abstain-radio"
            isChecked={vote?.toLowerCase() === 'abstain'}
            name="vote"
            register={registerInput}
            setValue={setValue}
            title="Abstain"
            value="abstain"
            disabled={isInProgress}
          />
        </Box>
        {(voter?.isRegisteredAsDRep || voter?.isRegisteredAsSoleVoter) && (
          <Button
            data-testid="show-votes-button"
            variant="text"
            size="large"
            disabled={isInProgress}
            sx={{
              mt: '26px',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '20px',
            }}
            onClick={() => {
              openModal({
                type: 'submittedVotes',
                state: {
                  ...proposal,
                  vote: previousVote?.vote,
                } satisfies SubmittedVotesModalState,
              });
            }}
          >
            Show votes
          </Button>
        )}
        <Typography
          variant="body1"
          sx={{
            textTransform: 'uppercase',
            fontSize: '14px',
            color: orange.c400,
            mt: 6,
          }}
        >
          Optional
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            mt: '5px',
          }}
        >
          {voteContextText
            ? 'Context about your vote'
            : 'You can provide context about your vote. This information will be viewable by other users.'}
        </Typography>
        {voteContextText && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                color: 'neutralGray',
                ...(!showWholeVoteContext && {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }),
              }}
            >
              {voteContextText}
            </Typography>
            <Button
              onClick={() => {
                setShowWholeVoteContext((prev) => !prev);
              }}
              sx={{
                p: 0,
                margin: '0 auto',
                ':hover': {
                  backgroundColor: 'transparent',
                },
              }}
              disableRipple
              variant="text"
              data-testid="external-modal-button"
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  color: 'primaryBlue',
                  borderBottom: '1px solid',
                }}
              >
                {showWholeVoteContext ? 'Show less' : 'Show more'}
              </Typography>
            </Button>
          </Box>
        )}
        <Button
          variant="outlined"
          onClick={() => {
            openModal({
              type: 'voteContext',
              state: {
                onSubmit: setVoteContextData,
              } satisfies VoteContextModalState,
            });
          }}
          sx={{
            mt: voteContextText ? '40px' : '12px',
            fontSize:
              screenWidth < 390
                ? '12px'
                : screenWidth < 1036
                  ? '14px'
                  : screenWidth < 1080
                    ? '10.5px'
                    : screenWidth < 1480
                      ? '11.5px'
                      : '14px',
          }}
          data-testid="provide-context-button"
        >
          {voteContextText
            ? 'Provide new context about your vote'
            : 'Provide context about your vote'}
        </Button>
      </Box>
      <Typography
        sx={{
          mb: 2,
          mt: 3,
          textAlign: 'center',
          visibility: previousVote?.vote ? 'visible' : 'hidden',
        }}
        variant="caption"
      >
        Select a different option to change your vote
      </Typography>
      {previousVote?.vote && previousVote?.vote !== vote ? (
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
        >
          {isMobile ? renderChangeVoteButton : renderCancelButton}
          <Box px={1} py={isMobile ? 1.5 : 0} />
          {isMobile ? renderCancelButton : renderChangeVoteButton}
        </Box>
      ) : (
        <Button
          data-testid="vote-button"
          variant="contained"
          disabled={
            !vote || previousVote?.vote === vote || (areFormErrors && isDirty)
          }
          isLoading={isVoteLoading}
          onClick={confirmVote}
          size="extraLarge"
        >
          Vote
        </Button>
      )}
    </Box>
  );
};
