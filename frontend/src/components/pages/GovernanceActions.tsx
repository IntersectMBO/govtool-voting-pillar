import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Divider, CircularProgress, Tabs } from '@mui/material';

import { useScreenDimension, useGetProposalsQuery } from '../../hooks';
import { Typography, Tab } from '../atoms';
import { DataActionsBar, TabPanel } from '../molecules';
import {
  GovernanceActionsToVote,
  GovernanceActionsVotedOn,
} from '../templates';
import {
  GOVERNANCE_ACTIONS_FILTERS,
  GOVERNANCE_ACTIONS_SORTING,
} from '../../consts';
import { useDataActionsBar } from '../../context/dataActionsBar';
import { usePillarContext } from '../../context';

const defaultCategories = GOVERNANCE_ACTIONS_FILTERS.map(
  (category) => category.key
);

export const GovernanceActionsPage = () => {
  const { debouncedSearchText, ...dataActionsBarProps } = useDataActionsBar();
  const { chosenFilters, chosenSorting } = dataActionsBarProps;
  const queryFilters =
    chosenFilters.length > 0 ? chosenFilters : defaultCategories;
  const { isMobile, pagePadding } = useScreenDimension();
  const { isEnabled, voter } = usePillarContext();

  const { proposals, isProposalsLoading } = useGetProposalsQuery({
    filters: queryFilters,
    sorting: chosenSorting,
    searchPhrase: debouncedSearchText,
  });

  const { state } = useLocation();
  const [content, setContent] = useState<number>(
    state && state.isVotedListOnLoad ? 1 : 0
  );

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setContent(newValue);
  };

  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        pt: isMobile ? 3.25 : 6.25,
      }}
    >
      <Typography
        sx={{ mb: isMobile ? 3.75 : 6, px: pagePadding }}
        variant={isMobile ? 'title1' : 'headline3'}
      >
        Governance Actions
      </Typography>
      {isMobile && (
        <Divider
          style={{
            borderColor: '#FFFFFF',
            borderWidth: 1,
            marginBottom: 30,
          }}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          px: pagePadding,
        }}
      >
        <DataActionsBar
          {...dataActionsBarProps}
          filterOptions={GOVERNANCE_ACTIONS_FILTERS}
          filtersTitle="Governance Action Type"
          sortOptions={GOVERNANCE_ACTIONS_SORTING}
        />

        {!proposals || isProposalsLoading ? (
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        ) : isEnabled &&
          (voter?.isRegisteredAsDRep || voter?.isRegisteredAsSoleVoter) ? (
          <>
            <Tabs
              sx={{
                marginTop: 3,
                display: 'flex',
                fontSize: 16,
                fontWeight: 500,
              }}
              value={content}
              indicatorColor="secondary"
              onChange={handleChange}
              aria-label="Governance Actions tabs"
            >
              <Tab
                data-testid="to-vote-tab"
                label="To vote"
                sx={{
                  textTransform: 'none',
                  width: !isMobile ? 'auto' : '50%',
                }}
              />
              <Tab
                data-testid="voted-tab"
                label="Voted on by me"
                sx={{
                  textTransform: 'none',
                  width: !isMobile ? 'auto' : '50%',
                }}
              />
            </Tabs>{' '}
            <Box height={isMobile ? 24 : 60} />
            <TabPanel value={content} index={0}>
              <GovernanceActionsToVote
                filters={chosenFilters}
                onDashboard
                searchPhrase={debouncedSearchText}
                sorting={chosenSorting}
                proposals={proposals}
              />
            </TabPanel>
            <TabPanel value={content} index={1}>
              <GovernanceActionsVotedOn
                filters={chosenFilters}
                searchPhrase={debouncedSearchText}
                sorting={chosenSorting}
              />
            </TabPanel>
          </>
        ) : (
          <>
            <Box height={isMobile ? 60 : 80} />
            <GovernanceActionsToVote
              filters={dataActionsBarProps.chosenFilters}
              onDashboard={false}
              searchPhrase={debouncedSearchText}
              sorting={dataActionsBarProps.chosenSorting}
              proposals={proposals}
            />
          </>
        )}
      </Box>
    </Box>
  );
};
