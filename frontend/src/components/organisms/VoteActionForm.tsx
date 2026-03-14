import { useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/material';

import { Button, Radio, Typography } from '../atoms';
import { orange } from '../../consts';
import { useModal, usePillarContext } from '../../context';
import {
  SurveyResponsePayload,
  useGetProposalSurveyQuery,
  useScreenDimension,
  useGetVoteContextTextFromFile,
  useVoteActionForm,
} from '../../hooks';
import { formatDisplayDate, getFullGovActionId } from '../../utils';
import { GovernanceActionType, ProposalData, ProposalVote } from '../../models';
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
  const [surveyAnswers, setSurveyAnswers] = useState<
    Record<
      string,
      {
        selection?: number[];
        numericValue?: number;
        customValue?: string;
      }
    >
  >({});
  const [surveyError, setSurveyError] = useState<string | null>(null);
  const [voteContextHash, setVoteContextHash] = useState<string | undefined>();
  const [voteContextUrl, setVoteContextUrl] = useState<string | undefined>();
  const [showWholeVoteContext, setShowWholeVoteContext] =
    useState<boolean>(false);

  const { voter } = usePillarContext();
  const fullProposalId = getFullGovActionId(proposal.txHash, proposal.index);
  const { data: proposalSurvey } = useGetProposalSurveyQuery(
    fullProposalId,
    !!proposal.type
  );
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

  const handleVoteClick = () => {
    const shouldAttachSurveyResponse =
      proposalSurvey?.linked &&
      proposalSurvey?.linkValidation?.valid &&
      proposalSurvey?.surveyDetailsValidation?.valid &&
      proposalSurvey?.surveyTxId &&
      proposalSurvey?.surveyDetails;

    let surveyResponsePayload: SurveyResponsePayload | undefined;

    if (shouldAttachSurveyResponse) {
      let hasInvalidSurveyAnswer = false;
      const answers = proposalSurvey.surveyDetails.questions.flatMap(
        (question) => {
          const answer = surveyAnswers[question.questionId];
          if (!answer) return [];

          if (Array.isArray(answer.selection)) {
            return [
              {
                questionId: question.questionId,
                selection: answer.selection,
              },
            ];
          }

          if (
            typeof answer.numericValue === 'number' &&
            Number.isFinite(answer.numericValue)
          ) {
            return [
              {
                questionId: question.questionId,
                numericValue: answer.numericValue,
              },
            ];
          }

          if (typeof answer.customValue === 'string' && answer.customValue.trim()) {
            try {
              const customValue = JSON.parse(answer.customValue);
              return [
                {
                  questionId: question.questionId,
                  customValue,
                },
              ];
            } catch (_error) {
              setSurveyError('Invalid custom survey answer JSON.');
              hasInvalidSurveyAnswer = true;
              return [];
            }
          }

          return [];
        }
      );

      if (hasInvalidSurveyAnswer) {
        return;
      }

      if (answers.length) {
        surveyResponsePayload = {
          specVersion: '1.0.0',
          surveyTxId: proposalSurvey.surveyTxId,
          responderRole: 'DRep',
          answers,
        };
      }
    }

    setSurveyError(null);
    confirmVote(surveyResponsePayload);
  };

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
        onClick={handleVoteClick}
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
    [canVote, handleVoteClick, isVoteLoading]
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
        {proposalSurvey?.linked &&
          proposalSurvey?.linkValidation?.valid &&
          proposalSurvey?.surveyDetailsValidation?.valid &&
          proposalSurvey?.surveyDetails && (
            <Box
              sx={{
                mt: 3,
                width: '100%',
                border: '1px solid rgba(47, 98, 220, 0.20)',
                borderRadius: '12px',
                p: 2,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Survey response
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                {proposalSurvey.surveyDetails.title}
              </Typography>
              {proposalSurvey.surveyDetails.questions.map((question) => {
                const localAnswer = surveyAnswers[question.questionId];
                const methodType = question.methodType;
                const selection = localAnswer?.selection ?? [];

                return (
                  <Box key={question.questionId} sx={{ mt: 2 }}>
                    <Typography variant="body2">{question.question}</Typography>
                    {(methodType ===
                      'urn:cardano:poll-method:single-choice:v1' ||
                      methodType === 'urn:cardano:poll-method:multi-select:v1') &&
                      (question.options ?? []).map((option, optionIndex) => {
                        const isSingle =
                          methodType === 'urn:cardano:poll-method:single-choice:v1';
                        const checked = selection.includes(optionIndex);

                        return (
                          <label
                            key={`${question.questionId}-${option}`}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginTop: '8px',
                              cursor: 'pointer',
                            }}
                          >
                            <input
                              type={isSingle ? 'radio' : 'checkbox'}
                              checked={checked}
                              onChange={() => {
                                setSurveyError(null);
                                if (isSingle) {
                                  setSurveyAnswers((prev) => ({
                                    ...prev,
                                    [question.questionId]: {
                                      selection: [optionIndex],
                                    },
                                  }));
                                  return;
                                }

                                setSurveyAnswers((prev) => {
                                  const currentSelection =
                                    prev[question.questionId]?.selection ?? [];
                                  const nextSelection = currentSelection.includes(
                                    optionIndex
                                  )
                                    ? currentSelection.filter(
                                        (item) => item !== optionIndex
                                      )
                                    : [...currentSelection, optionIndex];
                                  return {
                                    ...prev,
                                    [question.questionId]: {
                                      selection: nextSelection,
                                    },
                                  };
                                });
                              }}
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    {methodType === 'urn:cardano:poll-method:numeric-range:v1' && (
                      <input
                        style={{
                          width: '100%',
                          marginTop: '8px',
                          padding: '8px',
                          border: '1px solid #D0D7E8',
                          borderRadius: '8px',
                        }}
                        type="number"
                        min={question.numericConstraints?.minValue}
                        max={question.numericConstraints?.maxValue}
                        step={question.numericConstraints?.step ?? 1}
                        value={localAnswer?.numericValue ?? ''}
                        onChange={(event) => {
                          setSurveyError(null);
                          const numericValue = Number(event.target.value);
                          setSurveyAnswers((prev) => ({
                            ...prev,
                            [question.questionId]: { numericValue },
                          }));
                        }}
                      />
                    )}
                    {![
                      'urn:cardano:poll-method:single-choice:v1',
                      'urn:cardano:poll-method:multi-select:v1',
                      'urn:cardano:poll-method:numeric-range:v1',
                    ].includes(methodType) && (
                      <textarea
                        style={{
                          width: '100%',
                          marginTop: '8px',
                          minHeight: '76px',
                          padding: '8px',
                          border: '1px solid #D0D7E8',
                          borderRadius: '8px',
                        }}
                        placeholder='Custom value JSON, e.g. {"rank":[0,1,2]}'
                        value={localAnswer?.customValue ?? ''}
                        onChange={(event) => {
                          setSurveyError(null);
                          setSurveyAnswers((prev) => ({
                            ...prev,
                            [question.questionId]: {
                              customValue: event.target.value,
                            },
                          }));
                        }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>
          )}
        {proposalSurvey?.linked &&
          (!proposalSurvey?.linkValidation?.valid ||
            !proposalSurvey?.surveyDetailsValidation?.valid) && (
            <Box sx={{ mt: 2, width: '100%' }}>
              <Typography variant="caption" sx={{ display: 'block' }}>
                Linked survey is invalid:
              </Typography>
              {[
                ...(proposalSurvey?.linkValidation?.errors ?? []),
                ...(proposalSurvey?.surveyDetailsValidation?.errors ?? []),
              ].map((validationError) => (
                <Typography
                  key={validationError}
                  variant="caption"
                  sx={{ display: 'block', mt: 0.5 }}
                >
                  • {validationError}
                </Typography>
              ))}
            </Box>
          )}
        {surveyError && (
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#d32f2f',
            }}
          >
            {surveyError}
          </Typography>
        )}
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
          onClick={handleVoteClick}
          size="extraLarge"
        >
          Vote
        </Button>
      )}
    </Box>
  );
};
