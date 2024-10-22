import { useCallback, useMemo } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { generatePath, useNavigate } from 'react-router-dom';

import { useGetDRepVotesQuery, useScreenDimension } from '../../hooks';
import { Slider, GovernanceActionVotedOnCard } from '../organisms';
import { getFullGovActionId, getProposalTypeLabel } from '../../utils';
import { usePillarContext } from '../../context';
import { PATHS } from '../../consts';

type GovernanceActionsVotedOnProps = {
  filters: string[];
  searchPhrase?: string;
  sorting: string;
};

/**
 * Renders a component that displays the Governance Actions that the user has voted on.
 *
 * @param filters - The filters to apply to the Governance Actions.
 * @param searchPhrase - The search phrase to filter the Governance Actions.
 * @param sorting - The sorting options for the Governance Actions.
 * @returns The rendered component.
 */
export const GovernanceActionsVotedOn = ({
  filters,
  searchPhrase,
  sorting,
}: GovernanceActionsVotedOnProps) => {
  const { data, areDRepVotesLoading } = useGetDRepVotesQuery(
    filters,
    sorting,
    searchPhrase
  );
  const { isMobile } = useScreenDimension();
  const { pendingTransaction } = usePillarContext();
  const navigate = useNavigate();

  const onGovernanceActionSliderShowAllClick = useCallback(
    (title: string) => () => {
      navigate(
        generatePath(PATHS.governanceActionsCategory, {
          category: title,
        })
      );
    },
    [navigate]
  );

  const filteredData = useMemo(() => {
    if (data.length && searchPhrase) {
      return data
        .map((entry) => ({
          ...entry,
          actions: entry.actions.filter((action) =>
            getFullGovActionId(action.proposal.txHash, action.proposal.index)
              .toLowerCase()
              .includes(searchPhrase.toLowerCase())
          ),
        }))
        .filter((entry) => entry.actions.length > 0);
    }
    return data;
  }, [data, searchPhrase]);

  return areDRepVotesLoading ? (
    <Box py={4} display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  ) : (
    <>
      {!data.length ? (
        <Typography py={4} fontWeight="300">
          You haven&apos;t voted on any Governance Actions yet. Check the
          &apos;To vote on&apos; section to vote on Governance Actions.
        </Typography>
      ) : !filteredData?.length ? (
        <Typography py={4} fontWeight="300">
          No results for the search.
        </Typography>
      ) : (
        <>
          {filteredData?.map((item) => (
            <div key={item.title}>
              <Slider
                key={item.title}
                title={getProposalTypeLabel(item.title)}
                searchPhrase={searchPhrase}
                dataLength={item.actions.slice(0, 6).length}
                onDashboard
                onClickShowAll={onGovernanceActionSliderShowAllClick(
                  item.title
                )}
                data={item.actions.map((action) => (
                  <div
                    className="keen-slider__slide"
                    key={`${action?.proposal.id}${action.vote.vote}`}
                    style={{ overflow: 'visible', width: 'auto' }}
                  >
                    <GovernanceActionVotedOnCard
                      votedProposal={action}
                      inProgress={
                        pendingTransaction.vote?.resourceId ===
                        action.proposal.txHash + action.proposal.index
                      }
                    />
                  </div>
                ))}
              />
              <Box height={isMobile ? 50 : 72} />
            </div>
          ))}
        </>
      )}
    </>
  );
};
