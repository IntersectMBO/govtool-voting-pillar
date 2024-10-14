import { Box, Divider, CircularProgress } from '@mui/material';

import { useScreenDimension } from '../../hooks';
import { Typography } from '../atoms';
import { DataActionsBar } from '../molecules';
import { GovernanceActionsToVote } from '../templates';
import {
  GOVERNANCE_ACTIONS_FILTERS,
  GOVERNANCE_ACTIONS_SORTING,
} from '../../consts';
import { useDataActionsBar } from '../../context/dataActionsBar';

// TODO: Mock: Replace with a real data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const proposals: any = [
  {
    title: 'Info Action',
    actions: [
      {
        id: 419,
        txHash:
          '6ac2988bded2fe82f8efd6bad7afb6151a124d7b21e0dd31f6cd0b66f733a687',
        index: 0,
        type: 'InfoAction',
        details: {},
        expiryDate: '2024-10-10T07:46:23.275Z',
        expiryEpochNo: 483,
        createdDate: '2024-09-25T06:02:15.000Z',
        createdEpochNo: 468,
        url: 'https://docs.cardano.org/about-cardano/introduction/',
        metadataHash:
          '0000000000000000000000000000000000000000000000000000000000000000',
        protocolParams: null,
        title: null,
        abstract: null,
        motivation: null,
        rationale: null,
        dRepYesVotes: 0,
        dRepNoVotes: 205253998167,
        dRepAbstainVotes: 6652525776310,
        poolYesVotes: 0,
        poolNoVotes: 0,
        poolAbstainVotes: 0,
        ccYesVotes: 0,
        ccNoVotes: 0,
        ccAbstainVotes: 0,
        prevGovActionIndex: null,
        prevGovActionTxHash: null,
      },
      {
        id: 420,
        txHash:
          'd32abad7d403c4c921877f93e437c40af3a7bb5eb88236e27a98f3cb1e022c3e',
        index: 0,
        type: 'InfoAction',
        details: {},
        expiryDate: '2024-10-10T07:46:23.275Z',
        expiryEpochNo: 483,
        createdDate: '2024-09-25T06:10:47.000Z',
        createdEpochNo: 468,
        url: 'cardano.com',
        metadataHash:
          '0000000000000000000000000000000000000000000000000000000000000000',
        protocolParams: null,
        title: null,
        abstract: null,
        motivation: null,
        rationale: null,
        dRepYesVotes: 0,
        dRepNoVotes: 205253998167,
        dRepAbstainVotes: 8116673867964,
        poolYesVotes: 0,
        poolNoVotes: 0,
        poolAbstainVotes: 0,
        ccYesVotes: 0,
        ccNoVotes: 0,
        ccAbstainVotes: 0,
        prevGovActionIndex: null,
        prevGovActionTxHash: null,
      },
      {
        id: 421,
        txHash:
          '246c1a9ca2b50f8ee03a1a853b0ff94c3fa885810585d859fdec5ac61b03dabe',
        index: 0,
        type: 'InfoAction',
        details: {},
        expiryDate: '2024-10-10T07:46:23.275Z',
        expiryEpochNo: 483,
        createdDate: '2024-09-25T06:15:36.000Z',
        createdEpochNo: 468,
        url: 'agents.cardanoapi.io',
        metadataHash:
          '1111111111111111111111111111111111111111111111111111111111111111',
        protocolParams: null,
        title: null,
        abstract: null,
        motivation: null,
        rationale: null,
        dRepYesVotes: 0,
        dRepNoVotes: 205253998167,
        dRepAbstainVotes: 6652525776310,
        poolYesVotes: 0,
        poolNoVotes: 0,
        poolAbstainVotes: 0,
        ccYesVotes: 0,
        ccNoVotes: 0,
        ccAbstainVotes: 0,
        prevGovActionIndex: null,
        prevGovActionTxHash: null,
      },
      {
        id: 422,
        txHash:
          '7434d11716f14737b6506d89a2e2c95eb48aab8a7971f5e74c86c767966a4f51',
        index: 0,
        type: 'InfoAction',
        details: {},
        expiryDate: '2024-10-10T07:46:23.275Z',
        expiryEpochNo: 483,
        createdDate: '2024-09-25T06:17:04.000Z',
        createdEpochNo: 468,
        url: 'agents.cardanoapi.io',
        metadataHash:
          '1111111111111111111111111111111111111111111111111111111111111111',
        protocolParams: null,
        title: null,
        abstract: null,
        motivation: null,
        rationale: null,
        dRepYesVotes: 0,
        dRepNoVotes: 1669402089821,
        dRepAbstainVotes: 6652525776310,
        poolYesVotes: 0,
        poolNoVotes: 0,
        poolAbstainVotes: 0,
        ccYesVotes: 0,
        ccNoVotes: 0,
        ccAbstainVotes: 0,
        prevGovActionIndex: null,
        prevGovActionTxHash: null,
      },
      {
        id: 423,
        txHash:
          '7f1f9281dbb736131ac852eb6060b47e404d995f3af0208440ca989c80ca0ea3',
        index: 0,
        type: 'InfoAction',
        details: {},
        expiryDate: '2024-10-10T07:46:23.275Z',
        expiryEpochNo: 483,
        createdDate: '2024-09-25T06:32:34.000Z',
        createdEpochNo: 468,
        url: 'helloworld.com',
        metadataHash:
          '0000000000000000000000000000000000000000000000000000000000000000',
        protocolParams: null,
        title: null,
        abstract: null,
        motivation: null,
        rationale: null,
        dRepYesVotes: 0,
        dRepNoVotes: 205253998167,
        dRepAbstainVotes: 8116673867964,
        poolYesVotes: 0,
        poolNoVotes: 0,
        poolAbstainVotes: 0,
        ccYesVotes: 0,
        ccNoVotes: 0,
        ccAbstainVotes: 0,
        prevGovActionIndex: null,
        prevGovActionTxHash: null,
      },
      {
        id: 424,
        txHash:
          '8b9317ae02acd6249109abf8216e73d87aff1b0116a3216b2cbab3081b9f2d21',
        index: 0,
        type: 'InfoAction',
        details: {},
        expiryDate: '2024-10-10T07:46:23.275Z',
        expiryEpochNo: 483,
        createdDate: '2024-09-25T06:56:21.000Z',
        createdEpochNo: 468,
        url: 'https://metadata.cardanoapi.io/data/5b2d3da91a0481507561acd8886166ede0d700a7fea5e86e59ad83c0e6d9878c',
        metadataHash:
          '5b2d3da91a0481507561acd8886166ede0d700a7fea5e86e59ad83c0e6d9878c',
        protocolParams: null,
        title: null,
        abstract: null,
        motivation: null,
        rationale: null,
        dRepYesVotes: 0,
        dRepNoVotes: 205253998167,
        dRepAbstainVotes: 6652525776310,
        poolYesVotes: 0,
        poolNoVotes: 0,
        poolAbstainVotes: 0,
        ccYesVotes: 0,
        ccNoVotes: 0,
        ccAbstainVotes: 0,
        prevGovActionIndex: null,
        prevGovActionTxHash: null,
      },
      {
        id: 425,
        txHash:
          '552d6c7a8e830d37d88ea56a54635eadf4420e2c5a3128b4d7bf7862b85cdbc2',
        index: 0,
        type: 'InfoAction',
        details: {},
        expiryDate: '2024-10-10T07:46:23.275Z',
        expiryEpochNo: 483,
        createdDate: '2024-09-25T07:00:10.000Z',
        createdEpochNo: 468,
        url: 'https://metadata.cardanoapi.io/data/5b2d3da91a0481507561acd8886166ede0d700a7fea5e86e59ad83c0e6d9878c',
        metadataHash:
          '5b2d3da91a0481507561acd8886166ede0d700a7fea5e86e59ad83c0e6d9878c',
        protocolParams: null,
        title: null,
        abstract: null,
        motivation: null,
        rationale: null,
        dRepYesVotes: 0,
        dRepNoVotes: 205253998167,
        dRepAbstainVotes: 6652525776310,
        poolYesVotes: 0,
        poolNoVotes: 0,
        poolAbstainVotes: 0,
        ccYesVotes: 0,
        ccNoVotes: 0,
        ccAbstainVotes: 0,
        prevGovActionIndex: null,
        prevGovActionTxHash: null,
      },
    ],
  },
];
const isProposalsLoading = false;

export const GovernanceActionsPage = () => {
  const { debouncedSearchText, ...dataActionsBarProps } = useDataActionsBar();
  const { isMobile, pagePadding } = useScreenDimension();
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
