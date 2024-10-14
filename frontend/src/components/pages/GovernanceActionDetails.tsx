import {
  useNavigate,
  useLocation,
  useParams,
  generatePath,
} from 'react-router-dom';
import { Box, CircularProgress, Link } from '@mui/material';

import { Typography } from '../atoms';
import { ICONS, PATHS } from '../../consts';
import { useGetProposalQuery, useScreenDimension } from '../../hooks';
import { GovernanceActionDetailsCard } from '../organisms';
import { getFullGovActionId, getShortenedGovActionId } from '../../utils';
import { ProposalData } from '../../models';
import { Breadcrumbs } from '../molecules';

type GovernanceActionDetailsState = {
  proposal?: ProposalData;
  openedFromCategoryPage?: boolean;
};

// TODO: Refactor: GovernanceActionDetals and DashboardGovernanceActionDetails are almost identical
// and should be unified
export const GovernanceActionDetails = () => {
  const { state: untypedState, hash } = useLocation();
  const state = untypedState as GovernanceActionDetailsState | null;
  const index = hash.slice(1);
  const navigate = useNavigate();
  const { pagePadding, isMobile } = useScreenDimension();
  const { proposalId: txHash } = useParams();

  const fullProposalId = txHash && getFullGovActionId(txHash, index);
  const shortenedGovActionId = txHash && getShortenedGovActionId(txHash, index);

  const { data, isLoading } = useGetProposalQuery(
    fullProposalId ?? '',
    !state?.proposal
  );
  const proposal = (data ?? state)?.proposal;

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
          elementOne="Governance Actions"
          elementOnePath={PATHS.governanceActions}
          elementTwo={proposal?.title ?? ''}
          isDataMissing={proposal?.metadataStatus ?? null}
        />
        <Link
          sx={{
            cursor: 'pointer',
            display: 'flex',
            textDecoration: 'none',
          }}
          onClick={() =>
            navigate(
              state && state.openedFromCategoryPage
                ? generatePath(PATHS.governanceActionsCategory, {
                    category: state?.proposal?.type,
                  })
                : PATHS.governanceActions
            )
          }
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
          >
            <CircularProgress />
          </Box>
        ) : proposal ? (
          <Box data-testid="governance-action-details">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <GovernanceActionDetailsCard proposal={proposal} metadataValid />
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
