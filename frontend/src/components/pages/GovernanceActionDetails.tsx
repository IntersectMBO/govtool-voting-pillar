import { Box, CircularProgress, Link } from '@mui/material';

import { Typography } from '../atoms';
import { ICONS } from '../../consts';
import { useGetProposalQuery, useScreenDimension } from '../../hooks';
import { GovernanceActionDetailsCard } from '../organisms';
import { getFullGovActionId, getShortenedGovActionId } from '../../utils';
import { ProposalData } from '../../models';
import { Breadcrumbs } from '../molecules';
import { usePillarContext } from '../../context';

type GovernanceActionDetailsState = {
  proposal?: ProposalData;
  openedFromCategoryPage?: boolean;
};

export const GovernanceActionDetails = () => {
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
