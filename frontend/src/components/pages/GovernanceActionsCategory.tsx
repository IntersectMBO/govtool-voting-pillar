import { useMemo, useRef } from 'react';
import { Box, CircularProgress, Link } from '@mui/material';

import { Typography } from '../atoms';
import { GOVERNANCE_ACTIONS_SORTING, ICONS, PATHS } from '../../consts';
import {
  DataActionsBar,
  EmptyStateGovernanceActionsCategory,
  GovernanceActionCard,
} from '../molecules';
import {
  useFetchNextPageDetector,
  useGetProposalsInfiniteQuery,
  useSaveScrollPosition,
  useScreenDimension,
} from '../../hooks';
import {
  getFullGovActionId,
  getProposalTypeLabel,
  removeDuplicatedProposals,
} from '../../utils';
import { useDataActionsBar } from '../../context/dataActionsBar';
import { usePillarContext } from '../../context';

export const GovernanceActionsCategory = () => {
  const { useNavigate, useParams } = usePillarContext();
  const { category } = useParams('/governance_actions/category/[category]');
  const { debouncedSearchText, ...dataActionsBarProps } = useDataActionsBar();
  const { chosenSorting } = dataActionsBarProps;
  const { isMobile, pagePadding, screenWidth } = useScreenDimension();
  const navigate = useNavigate();
  const { voter, isEnabled } = usePillarContext();
  const {
    isProposalsFetching,
    isProposalsFetchingNextPage,
    isProposalsLoading,
    proposals,
    proposalsfetchNextPage,
    proposalsHaveNextPage,
  } = useGetProposalsInfiniteQuery({
    filters: [category?.replace(/ /g, '') ?? ''],
    sorting: chosenSorting,
    searchPhrase: debouncedSearchText,
  });
  const loadNextPageRef = useRef(null);

  useFetchNextPageDetector(
    proposalsfetchNextPage,
    isProposalsLoading || isProposalsFetchingNextPage,
    proposalsHaveNextPage
  );

  const saveScrollPosition = useSaveScrollPosition(
    isProposalsLoading,
    isProposalsFetching
  );

  const mappedData = useMemo(
    () => removeDuplicatedProposals(proposals),
    [proposals]
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      minHeight="100vh"
    >
      <Box
        flex={1}
        pt={isMobile ? 3.25 : 6.25}
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <Box px={pagePadding} flex={1} display="flex" flexDirection="column">
          <Link
            data-testid="back-to-list-link"
            sx={{
              cursor: 'pointer',
              display: 'flex',
              textDecoration: 'none',
              marginBottom: 4.25,
            }}
            onClick={() => navigate(PATHS.governanceActions)}
          >
            <img
              src={ICONS.arrowRightIcon}
              alt="arrow"
              style={{ marginRight: '12px', transform: 'rotate(180deg)' }}
            />
            <Typography variant="body2" color="primary" fontWeight={400}>
              Back to Governance Actions
            </Typography>
          </Link>
          <DataActionsBar
            {...dataActionsBarProps}
            isFiltering={false}
            sortOptions={GOVERNANCE_ACTIONS_SORTING}
          />
          <Typography
            variant="title2"
            sx={{
              m: '32px 0 32px',
            }}
          >
            {getProposalTypeLabel(category ?? '')}
          </Typography>
          {!isProposalsLoading ? (
            !mappedData?.length ? (
              <EmptyStateGovernanceActionsCategory
                category={category}
                isSearch={!!debouncedSearchText.length}
              />
            ) : (
              <Box
                columnGap="20px"
                display="grid"
                gridTemplateColumns={`repeat(auto-fit, minmax(${
                  screenWidth < 420 ? '290px' : isMobile ? '324px' : '350px'
                }, 1fr))`}
              >
                {mappedData.map((item) => (
                  <Box pb={4.25} key={item.txHash + item.index}>
                    <GovernanceActionCard
                      {...item}
                      isVoter={!!voter && isEnabled}
                      onClick={() => {
                        saveScrollPosition();

                        navigate(
                          PATHS.governanceActionsAction.replace(
                            ':proposalId',
                            getFullGovActionId(item.txHash, item.index)
                          ),
                          {
                            state: {
                              proposal: item,
                              openedFromCategoryPage: true,
                            },
                          }
                        );
                      }}
                    />
                  </Box>
                ))}
                {proposalsHaveNextPage && isProposalsFetchingNextPage && (
                  <Box
                    py={4}
                    display="flex"
                    justifyContent="center"
                    ref={loadNextPageRef}
                  >
                    <CircularProgress />
                  </Box>
                )}
              </Box>
            )
          ) : (
            <Box
              alignItems="center"
              py={4}
              display="flex"
              justifyContent="center"
              flex={1}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
