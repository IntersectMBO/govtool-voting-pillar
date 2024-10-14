import { FC } from 'react';
import { Box } from '@mui/material';

import { Button } from '../atoms';
import {
  GovernanceActionCardElement,
  GovernanceActionCardHeader,
  GovernanceActionCardStatePill,
  GovernanceActionsDatesBox,
} from '../molecules';

import { useScreenDimension } from '../../hooks';
import {
  getFullGovActionId,
  getProposalTypeLabel,
  getProposalTypeNoEmptySpaces,
} from '../../utils';
import { ProposalData } from '../../models';

type ActionTypeProps = Omit<
  ProposalData,
  | 'yesVotes'
  | 'noVotes'
  | 'abstainVotes'
  | 'metadataHash'
  | 'url'
  | 'id'
  | 'details'
  | 'rationale'
  | 'motivation'
> & {
  onClick?: () => void;
  inProgress?: boolean;
};

/**
 * Represents a card component for displaying governance actions.
 *
 * @component
 * @param {ActionTypeProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
export const GovernanceActionCard: FC<ActionTypeProps> = ({ ...props }) => {
  const {
    abstract,
    type,
    inProgress = false,
    expiryDate,
    expiryEpochNo,
    onClick,
    createdDate,
    createdEpochNo,
    txHash,
    index,
    metadataStatus,
    metadataValid,
    title,
  } = props;
  const { isMobile, screenWidth } = useScreenDimension();

  const govActionId = getFullGovActionId(txHash, index);

  return (
    <Box
      sx={{
        width: screenWidth < 420 ? 290 : isMobile ? 324 : 350,
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0px 4px 15px 0px #DDE3F5',
        borderRadius: '20px',
        backgroundColor: !metadataValid
          ? 'rgba(251, 235, 235, 0.50)'
          : 'rgba(255, 255, 255, 0.3)',
        ...(!metadataValid && {
          border: '1px solid #F6D5D5',
        }),
        ...(inProgress && {
          border: '1px solid #FFCBAD',
        }),
      }}
      data-testid={`govaction-${getProposalTypeNoEmptySpaces(type)}-card`}
    >
      {inProgress && <GovernanceActionCardStatePill variant="inProgress" />}
      <Box
        sx={{
          padding: '40px 24px 0',
        }}
      >
        <GovernanceActionCardHeader
          title={title}
          isDataMissing={metadataStatus}
        />
        <GovernanceActionCardElement
          label="Abstract"
          text={abstract}
          textVariant="twoLines"
          dataTestId="governance-action-abstract"
          isSliderCard
          isMarkdown
        />
        <GovernanceActionCardElement
          label="Governance Action Type:"
          text={getProposalTypeLabel(type)}
          textVariant="pill"
          dataTestId={`${getProposalTypeNoEmptySpaces(type)}-type`}
          isSliderCard
        />
        <GovernanceActionsDatesBox
          createdDate={createdDate}
          expiryDate={expiryDate}
          expiryEpochNo={expiryEpochNo}
          createdEpochNo={createdEpochNo}
          isSliderCard
        />
        <GovernanceActionCardElement
          label="Governance Action ID:"
          text={getFullGovActionId(txHash, index)}
          dataTestId={`${getFullGovActionId(txHash, index)}-id`}
          isCopyButton
          isSliderCard
        />
      </Box>
      <Box
        sx={{
          boxShadow: '0px 4px 15px 0px #DDE3F5',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          padding: 3,
          bgcolor: 'white',
        }}
      >
        <Button
          onClick={onClick}
          variant={inProgress ? 'outlined' : 'contained'}
          size="large"
          sx={{
            width: '100%',
          }}
          data-testid={`govaction-${govActionId}-view-detail`}
        >
          {inProgress ? 'View Details' : 'View Details and Vote'}
        </Button>
      </Box>
    </Box>
  );
};
