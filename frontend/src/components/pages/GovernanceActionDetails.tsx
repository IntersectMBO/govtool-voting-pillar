import { useMemo, useState } from 'react';
import { Box, CircularProgress, Link } from '@mui/material';

import { Typography } from '../atoms';
import { ICONS } from '../../consts';
import {
  useGetProposalQuery,
  useGetProposalSurveyQuery,
  useGetProposalSurveyTallyQuery,
  useScreenDimension,
} from '../../hooks';
import { GovernanceActionDetailsCard } from '../organisms';
import { getFullGovActionId, getShortenedGovActionId } from '../../utils';
import { GovernanceActionType, ProposalData } from '../../models';
import { Breadcrumbs } from '../molecules';
import { usePillarContext } from '../../context';

type GovernanceActionDetailsState = {
  proposal?: ProposalData;
  openedFromCategoryPage?: boolean;
};

export const GovernanceActionDetails = () => {
  const [weighting, setWeighting] = useState<'CredentialBased' | 'StakeBased'>(
    'CredentialBased'
  );
  const { voter, useLocation, useParams, useRouter } = usePillarContext();
  const location = useLocation();
  const { state: untypedState, hash } = location;
  const state = untypedState as GovernanceActionDetailsState | null;
  const index = hash.slice(1);
  const router = useRouter();
  const { pagePadding, isMobile } = useScreenDimension();
  const { hash: txHash } = useParams('/governance_actions/[hash]');

  const fullProposalId = txHash && getFullGovActionId(txHash, index);
  const shortenedGovActionId = txHash && getShortenedGovActionId(txHash, index);

  const { data, isLoading } = useGetProposalQuery(
    fullProposalId ?? '',
    !state?.proposal
  );
  const proposal = (data ?? state)?.proposal;
  const shouldFetchSurvey =
    !!fullProposalId && proposal?.type === GovernanceActionType.InfoAction;
  const { data: surveyData, isLoading: isSurveyLoading } =
    useGetProposalSurveyQuery(fullProposalId ?? '', shouldFetchSurvey);

  const shouldFetchTally = useMemo(
    () =>
      !!shouldFetchSurvey &&
      !!surveyData?.linked &&
      !!surveyData?.linkValidation?.valid &&
      !!surveyData?.surveyDetailsValidation?.valid,
    [shouldFetchSurvey, surveyData]
  );

  const { data: surveyTallyData, isLoading: isSurveyTallyLoading } =
    useGetProposalSurveyTallyQuery(
      fullProposalId ?? '',
      weighting,
      shouldFetchTally
    );

  return (
    <Box display="flex" flex={1} flexDirection="row" pt={2} px={pagePadding}>
      <Box display="flex" flex={1} flexDirection="column" width="100%">
        {isMobile ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 0 24px',
              mb: '10px',
              borderBottom: '1px solid #FFF',
            }}
          >
            <Typography variant="title1">Governance Actions</Typography>
          </Box>
        ) : null}
        <Breadcrumbs
          elementTwo={proposal?.title ?? ''}
          isDataMissing={proposal?.metadataStatus ?? null}
        />
        <Link
          sx={{
            cursor: 'pointer',
            display: 'flex',
            textDecoration: 'none',
          }}
          onClick={router.back}
        >
          <img
            alt="arrow"
            src={ICONS.arrowRightIcon}
            style={{ marginRight: '12px', transform: 'rotate(180deg)' }}
          />
          <Typography color="primary" fontWeight={400} variant="body2">
            Back
          </Typography>
        </Link>
        {isLoading ? (
          <Box
            alignItems="center"
            display="flex"
            flex={1}
            justifyContent="center"
            minHeight="100vh"
          >
            <CircularProgress />
          </Box>
        ) : proposal ? (
          <Box data-testid="governance-action-details">
            <GovernanceActionDetailsCard
              proposal={proposal}
              isDataMissing={proposal.metadataStatus}
              isVoter={!!voter}
            />
            {proposal.type === GovernanceActionType.InfoAction && (
              <Box
                sx={{
                  mt: 3,
                  p: 3,
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.45)',
                  boxShadow: '2px 2px 20px 0px rgba(47, 98, 220, 0.12)',
                }}
              >
                <Typography variant="headline4">Linked Survey</Typography>
                {isSurveyLoading ? (
                  <Box mt={2}>
                    <CircularProgress size={22} />
                  </Box>
                ) : !surveyData?.linked ? (
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    No survey linked to this Info Action.
                  </Typography>
                ) : (
                  <>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {surveyData.surveyDetails?.title ?? 'Untitled survey'}
                    </Typography>
                    {surveyData.surveyDetails?.description && (
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: 'neutralGray' }}
                      >
                        {surveyData.surveyDetails.description}
                      </Typography>
                    )}

                    {(!surveyData.linkValidation.valid ||
                      !surveyData.surveyDetailsValidation.valid) && (
                      <Box mt={2}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Survey validation errors
                        </Typography>
                        {[...(surveyData.linkValidation.errors ?? []), ...(surveyData.surveyDetailsValidation.errors ?? [])].map(
                          (error) => (
                            <Typography
                              key={error}
                              variant="caption"
                              sx={{ display: 'block', mt: 0.5 }}
                            >
                              • {error}
                            </Typography>
                          )
                        )}
                      </Box>
                    )}

                    {surveyData.linkValidation.valid &&
                      surveyData.surveyDetailsValidation.valid && (
                        <>
                          <Box
                            sx={{
                              mt: 2,
                              display: 'flex',
                              gap: 1,
                              flexWrap: 'wrap',
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => setWeighting('CredentialBased')}
                              style={{
                                borderRadius: 20,
                                border: '1px solid #2F62DC',
                                padding: '6px 12px',
                                cursor: 'pointer',
                                background:
                                  weighting === 'CredentialBased'
                                    ? '#2F62DC'
                                    : 'transparent',
                                color:
                                  weighting === 'CredentialBased'
                                    ? '#fff'
                                    : '#2F62DC',
                              }}
                            >
                              CredentialBased
                            </button>
                            <button
                              type="button"
                              onClick={() => setWeighting('StakeBased')}
                              style={{
                                borderRadius: 20,
                                border: '1px solid #2F62DC',
                                padding: '6px 12px',
                                cursor: 'pointer',
                                background:
                                  weighting === 'StakeBased'
                                    ? '#2F62DC'
                                    : 'transparent',
                                color:
                                  weighting === 'StakeBased'
                                    ? '#fff'
                                    : '#2F62DC',
                              }}
                            >
                              StakeBased
                            </button>
                          </Box>

                          {isSurveyTallyLoading ? (
                            <Box mt={2}>
                              <CircularProgress size={22} />
                            </Box>
                          ) : surveyTallyData ? (
                            <Box mt={2}>
                              <Typography variant="caption" sx={{ display: 'block' }}>
                                Total responses seen: {surveyTallyData.totals.totalSeen}
                              </Typography>
                              <Typography variant="caption" sx={{ display: 'block' }}>
                                Valid latest responses: {surveyTallyData.totals.valid}
                              </Typography>
                              <Typography variant="caption" sx={{ display: 'block' }}>
                                Invalid responses: {surveyTallyData.totals.invalid}
                              </Typography>

                              <Box mt={2}>
                                {surveyTallyData.methodResults.map((result) => {
                                  const resultRecord = result as Record<string, unknown>;
                                  const questionId = String(
                                    resultRecord.questionId ?? 'question'
                                  );
                                  const question = String(resultRecord.question ?? '');
                                  const options = Array.isArray(resultRecord.options)
                                    ? (resultRecord.options as string[])
                                    : [];
                                  const optionTotals = Array.isArray(
                                    resultRecord.optionTotals
                                  )
                                    ? (resultRecord.optionTotals as number[])
                                    : [];
                                  const customValueTotals =
                                    (resultRecord.customValueTotals as
                                      | Record<string, number>
                                      | undefined) ?? {};

                                  return (
                                    <Box
                                      key={questionId}
                                      sx={{
                                        mt: 2,
                                        p: 2,
                                        borderRadius: '12px',
                                        border: '1px solid rgba(47,98,220,0.2)',
                                      }}
                                    >
                                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        {question}
                                      </Typography>
                                      {options.length > 0 &&
                                        options.map((option, optionIndex) => (
                                          <Typography
                                            key={`${questionId}-${option}`}
                                            variant="caption"
                                            sx={{ display: 'block', mt: 0.5 }}
                                          >
                                            {option}: {optionTotals[optionIndex] ?? 0}
                                          </Typography>
                                        ))}
                                      {resultRecord.mean !== undefined && (
                                        <>
                                          <Typography
                                            variant="caption"
                                            sx={{ display: 'block', mt: 0.5 }}
                                          >
                                            Count: {String(resultRecord.count ?? 0)}
                                          </Typography>
                                          <Typography
                                            variant="caption"
                                            sx={{ display: 'block', mt: 0.5 }}
                                          >
                                            Min: {String(resultRecord.min ?? '-')}
                                          </Typography>
                                          <Typography
                                            variant="caption"
                                            sx={{ display: 'block', mt: 0.5 }}
                                          >
                                            Max: {String(resultRecord.max ?? '-')}
                                          </Typography>
                                          <Typography
                                            variant="caption"
                                            sx={{ display: 'block', mt: 0.5 }}
                                          >
                                            Mean: {String(resultRecord.mean ?? '-')}
                                          </Typography>
                                        </>
                                      )}
                                      {Object.keys(customValueTotals).length > 0 &&
                                        Object.entries(customValueTotals).map(
                                          ([valueKey, valueTotal]) => (
                                            <Typography
                                              key={`${questionId}-${valueKey}`}
                                              variant="caption"
                                              sx={{ display: 'block', mt: 0.5 }}
                                            >
                                              {valueKey}: {valueTotal}
                                            </Typography>
                                          )
                                        )}
                                    </Box>
                                  );
                                })}
                              </Box>
                            </Box>
                          ) : null}
                        </>
                      )}
                  </>
                )}
              </Box>
            )}
          </Box>
        ) : (
          <Box display="flex" flexWrap="wrap" mt={4}>
            <Typography fontWeight={300}>
              Governance action with id &nbsp;
            </Typography>
            <Typography fontWeight={500}>
              {` ${shortenedGovActionId} `}
            </Typography>
            <Typography fontWeight={300}>&nbsp; does not exist.</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
