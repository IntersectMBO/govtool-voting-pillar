import { useMemo, useState } from 'react';
import { Box, Tabs, Tab, styled } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { CopyButton, ExternalModalButton, Typography } from '../atoms';
import {
  GovernanceActionCardElement,
  GovernanceActionDetailsCardLinks,
  DataMissingInfoBox,
  DataMissingHeader,
  GovernanceActionsDatesBox,
  GovernanceActionDetailsDiffView,
} from '.';
import { useScreenDimension } from '../../hooks';
import {
  getProposalTypeNoEmptySpaces,
  testIdFromLabel,
  getProposalTypeLabel,
  filterUpdatableProtocolParams,
  filterOutNullParams,
  getFullGovActionId,
} from '../../utils';
import {
  MetadataValidationStatus,
  ProposalData,
  GovernanceActionType,
} from '../../models';
import { usePillarContext } from '../../context';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const CustomTabPanel = ({ children, value, index }: TabPanelProps) => {
  if (value !== index) return null;
  return <Box sx={{ overflow: 'auto' }}>{children}</Box>;
};

type StyledTabProps = {
  label: string;
  isMobile: boolean;
};

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ isMobile }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 16,
  width: !isMobile ? 'auto' : '50%',

  color: 'rgba(36, 34, 50, 0.5)',
  '&.Mui-selected': {
    color: 'rgba(38, 37, 45, 1)',
  },
}));

type GovernanceActionDetailsCardDataProps = {
  isDashboard?: boolean;
  isDataMissing: MetadataValidationStatus | null;
  isInProgress?: boolean;
  isOneColumn: boolean;
  isSubmitted?: boolean;
  proposal: ProposalData;
};

/**
 * Renders the details of a governance action card.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.isDashboard - Indicates if the component is rendered in a dashboard.
 * @param {boolean} props.isDataMissing - Indicates if the data for the governance action is missing.
 * @param {boolean} props.isInProgress - Indicates if the governance action is in progress.
 * @param {boolean} props.isOneColumn - Indicates if the component is rendered in a single column layout.
 * @param {boolean} props.isSubmitted - Indicates if the governance action has been submitted.
 * @param {object} props.proposal - The details of the governance action.
 * @param {string} props.proposal.abstract - The abstract of the governance action.
 * @param {string} props.proposal.createdDate - The date when the governance action was created.
 * @param {number} props.proposal.createdEpochNo - The epoch number when the governance action was created.
 * @param {string} props.proposal.details - The details of the governance action.
 * @param {string} props.proposal.expiryDate - The date when the governance action will expire.
 * @param {number} props.proposal.expiryEpochNo - The epoch number when the governance action will expire.
 * @param {number} props.proposal.index - The index of the governance action.
 * @param {string} props.proposal.motivation - The motivation behind the governance action.
 * @param {number} props.proposal.prevGovActionIndex - The index of the previous governance action.
 * @param {string} props.proposal.prevGovActionTxHash - The transaction hash of the previous governance action.
 * @param {string} props.proposal.rationale - The rationale behind the governance action.
 * @param {string[]} props.proposal.references - The references related to the governance action.
 * @param {string} props.proposal.title - The title of the governance action.
 * @param {string} props.proposal.txHash - The transaction hash of the governance action.
 * @param {string} props.proposal.url - The URL of the governance action.
 * @param {string} props.proposal.type - The type of the governance action.
 * @param {object} props.proposal.protocolParams - The protocol parameters of the governance action.
 *
 * @returns {JSX.Element} The rendered component.
 */
export const GovernanceActionDetailsCardData = ({
  isDashboard,
  isDataMissing,
  isInProgress,
  isOneColumn,
  isSubmitted,
  proposal: {
    abstract,
    createdDate,
    createdEpochNo,
    details,
    expiryDate,
    expiryEpochNo,
    index,
    motivation,
    prevGovActionIndex,
    prevGovActionTxHash,
    rationale,
    references,
    title,
    txHash,
    url,
    type,
    protocolParams,
  },
}: GovernanceActionDetailsCardDataProps) => {
  const { epochParams } = usePillarContext();
  const { screenWidth } = useScreenDimension();
  const { isMobile } = useScreenDimension();

  const updatableProtocolParams = useMemo(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      filterUpdatableProtocolParams(epochParams as any, protocolParams, [
        'id',
        'registered_tx_id',
        'key',
      ]),
    [epochParams, protocolParams]
  );

  const nonNullProtocolParams = useMemo(
    () =>
      filterOutNullParams(protocolParams, ['id', 'registered_tx_id', 'key']),
    [protocolParams]
  );

  const isModifiedPadding =
    (isDashboard && screenWidth < 1168) ?? screenWidth < 900;

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const { pathname, hash } = useLocation();

  const govActionLinkToShare = `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ''}${pathname}${
    hash ?? ''
  }`;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const label = getProposalTypeLabel(type);
  const govActionId = getFullGovActionId(txHash, index);
  const prevGovActionId =
    prevGovActionIndex && prevGovActionTxHash
      ? getFullGovActionId(prevGovActionTxHash, prevGovActionIndex)
      : null;

  const tabs = useMemo(
    () =>
      [
        {
          label: 'Reasoning',
          dataTestId: 'reasoning-tab',
          content: (
            <ReasoningTabContent
              abstract={abstract}
              motivation={motivation}
              rationale={rationale}
            />
          ),
          visible:
            !isDataMissing && (!!abstract || !!motivation || !!rationale),
        },
        {
          label: 'Parameters',
          dataTestId: 'parameters-tab',
          content: (
            <GovernanceActionDetailsDiffView
              oldJson={updatableProtocolParams}
              newJson={nonNullProtocolParams}
            />
          ),
          visible:
            type === GovernanceActionType.ParameterChange &&
            !!protocolParams &&
            !!epochParams,
        },
        {
          label: 'Details',
          dataTestId: 'hardfork-details-tab',
          content: (
            <HardforkDetailsTabContent
              details={details}
              prevGovActionId={prevGovActionId}
            />
          ),
          visible:
            type === GovernanceActionType.HardForkInitiation && !!details,
        },
      ].filter((tab) => tab.visible),
    [
      abstract,
      motivation,
      rationale,
      isDataMissing,
      updatableProtocolParams,
      nonNullProtocolParams,
      type,
      protocolParams,
      epochParams,
      details,
      prevGovActionId,
    ]
  );

  return (
    <Box
      sx={{
        borderRadius: isOneColumn ? '20px 20px 0 0' : '20px 0 0 20px',
        bgcolor: 'rgba(255, 255, 255, 0.30)',
        p: `40px ${isModifiedPadding ? '24px' : '40px'}`,
        overflow: 'hidden',
      }}
    >
      <DataMissingHeader
        isDataMissing={isDataMissing}
        shareLink={govActionLinkToShare}
        title={title}
      />
      <DataMissingInfoBox
        isDataMissing={isDataMissing}
        isInProgress={isInProgress}
        isSubmitted={isSubmitted}
      />
      <GovernanceActionCardElement
        label="Governance Action Type:"
        text={label}
        textVariant="pill"
        dataTestId={`${getProposalTypeNoEmptySpaces(label)}-type`}
      />
      <GovernanceActionsDatesBox
        createdDate={createdDate}
        expiryDate={expiryDate}
        expiryEpochNo={expiryEpochNo}
        createdEpochNo={createdEpochNo}
      />
      {isDataMissing && (
        <ExternalModalButton url={url} label="See external data" />
      )}
      <GovernanceActionCardElement
        label="Governance Action ID:"
        text={govActionId}
        isCopyButton
        dataTestId={`${govActionId}-id`}
      />

      {tabs.length === 1 ? (
        tabs[0].content
      ) : (
        <>
          <Tabs
            sx={{
              marginY: 4,
              display: 'flex',
              fontSize: 16,
              fontWeight: 500,
            }}
            value={selectedTab}
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabs.map((tab) => (
              <StyledTab
                key={tab.label}
                data-testid={tab.dataTestId}
                label={tab.label}
                isMobile={isMobile}
              />
            ))}
          </Tabs>

          {tabs.map((tab, tabIndex) => (
            <CustomTabPanel
              key={tab.label}
              value={selectedTab}
              index={tabIndex}
            >
              {tab.content}
            </CustomTabPanel>
          ))}
        </>
      )}

      {details &&
        type !== GovernanceActionType.HardForkInitiation &&
        Object.keys(details).length !== 0 &&
        Object.entries(details).map(([detailLabel, content]) => (
          <GovernanceActionCardElement
            isCopyButton={detailLabel.toLowerCase().includes('address')}
            label={detailLabel}
            text={content}
            dataTestId={testIdFromLabel(detailLabel)}
          />
        ))}
      <GovernanceActionDetailsCardLinks links={references} />
    </Box>
  );
};

const ReasoningTabContent = ({
  abstract,
  motivation,
  rationale,
}: Pick<ProposalData, 'abstract' | 'motivation' | 'rationale'>) => (
  <>
    <GovernanceActionCardElement
      label="Abstract"
      text={abstract}
      textVariant="longText"
      dataTestId="abstract"
      isMarkdown
    />
    <GovernanceActionCardElement
      label="Motivation"
      text={motivation}
      textVariant="longText"
      dataTestId="motivation"
      isMarkdown
    />
    <GovernanceActionCardElement
      label="Rationale"
      text={rationale}
      textVariant="longText"
      dataTestId="rationale"
      isMarkdown
    />
  </>
);

const HardforkDetailsTabContent = ({
  details,
  prevGovActionId,
}: Pick<ProposalData, 'details'> & { prevGovActionId: string | null }) => {
  const { epochParams } = usePillarContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pb: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography variant="body2">Current version</Typography>
        <Typography variant="body2">
          {epochParams
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              `${(epochParams as any)?.protocol_major}.${(epochParams as any)?.protocol_minor}`
            : '-'}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography variant="body2">Proposed version</Typography>
        <Typography variant="body2">
          {details ? `${details.major}.${details.minor}` : '-'}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography variant="body2">Previous Governance Action ID</Typography>
        {prevGovActionId ? (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                maxWidth: 283,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'primaryBlue',
              }}
            >
              {prevGovActionId}
            </Typography>
            <CopyButton text={prevGovActionId} variant="blueThin" />
          </Box>
        ) : (
          <Typography variant="body2">-</Typography>
        )}
      </Box>
    </Box>
  );
};
