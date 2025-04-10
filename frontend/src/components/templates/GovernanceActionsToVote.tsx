import { useCallback } from 'react';
import { Box } from '@mui/material';

import { Typography } from '../atoms';
import { GovernanceActionCard } from '../molecules';
import { Slider } from '../organisms';
import { ProposalData } from '../../models';
import { useScreenDimension } from '../../hooks';
import { getFullGovActionId, getProposalTypeTitle } from '../../utils';
import { PATHS } from '../../consts';
import { usePillarContext } from '../../context';

type GovernanceActionsToVoteProps = {
  filters: string[];
  sorting: string;
  proposals: { title: string; actions: ProposalData[] }[];
  onDashboard?: boolean;
  searchPhrase?: string;
};

/**
 * Renders a component that displays governance actions to vote on.
 *
 * @param filters - The filters to apply to the governance actions.
 * @param onDashboard - A boolean indicating whether the component is being rendered on the dashboard.
 * @param proposals - An array of proposal data.
 * @param searchPhrase - The search phrase to filter the governance actions.
 * @param sorting - The sorting option for the governance actions.
 * @returns The rendered component.
 */
export const GovernanceActionsToVote = ({
  filters,
  onDashboard = true,
  proposals,
  searchPhrase,
  sorting,
}: GovernanceActionsToVoteProps) => {
  const { generatePath, voter, isEnabled, useRouter } = usePillarContext();
  const { isMobile } = useScreenDimension();
  const router = useRouter();

  const onGovernanceActionCardClick = useCallback(
    (action: ProposalData) => () => {
      router.push(
        `${isEnabled ? '/dashboard' : ''}${generatePath(
          PATHS.governanceActionsAction,
          {
            proposalId: getFullGovActionId(action.txHash, action.index),
          }
        )}`
      );
    },
    [generatePath, router, isEnabled]
  );

  const onGovernanceActionSliderShowAllClick = useCallback(
    (title: string) => () => {
      router.push(
        `${isEnabled ? '/dashboard' : ''}${generatePath(
          PATHS.governanceActionsCategory,
          {
            category: title,
          }
        )}`
      );
    },
    [generatePath, router, isEnabled]
  );

  return (
    <>
      {!proposals.length ? (
        <Typography fontWeight={300} sx={{ py: 4 }}>
          No results for the search.
        </Typography>
      ) : (
        <>
          {proposals?.map((item, index) => (
            <Box key={item.title} pb={2.5}>
              <Slider
                data={item.actions.slice(0, 6).map((action) => (
                  <div
                    className="keen-slider__slide"
                    key={action.id}
                    style={{
                      overflow: 'visible',
                      width: 'auto',
                    }}
                  >
                    <GovernanceActionCard
                      {...action}
                      inProgress={false}
                      isVoter={!!voter && isEnabled}
                      onClick={onGovernanceActionCardClick(action)}
                    />
                  </div>
                ))}
                dataLength={item.actions.slice(0, 6).length}
                filters={filters}
                notSlicedDataLength={item.actions.length}
                onDashboard={onDashboard}
                searchPhrase={searchPhrase}
                sorting={sorting}
                title={getProposalTypeTitle(item.title)}
                onClickShowAll={onGovernanceActionSliderShowAllClick(
                  item.title
                )}
              />
              {index < proposals.length - 1 && (
                <Box height={isMobile ? 40 : 52} />
              )}
            </Box>
          ))}
        </>
      )}
    </>
  );
};
