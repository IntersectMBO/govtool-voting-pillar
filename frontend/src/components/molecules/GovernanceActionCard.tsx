import { FC, useMemo } from 'react';
import { Box } from '@mui/material';

import {
  GovernanceActionCardElement,
  GovernanceActionCardHeader,
  GovernanceActionCardStatePill,
  GovernanceActionsDatesBox,
} from '.';

import { Button } from '../atoms';
import {
  getFullGovActionId,
  getProposalTypeLabel,
  getProposalTypeNoEmptySpaces,
} from '../../utils';
import { ProposalData } from '../../models';
import { useScreenDimension } from '../../hooks';

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
 * Renders a card component for a governance action.
 *
 * @component
 * @param {ActionTypeProps} props - The props for the component.
 * @param {string} props.abstract - The abstract of the governance action.
 * @param {string} props.type - The type of the governance action.
 * @param {boolean} [props.inProgress=false] - Indicates if the governance action is in progress.
 * @param {string} props.expiryDate - The expiry date of the governance action.
 * @param {number} props.expiryEpochNo - The expiry epoch number of the governance action.
 * @param {Function} props.onClick - The click event handler for the component.
 * @param {string} props.createdDate - The created date of the governance action.
 * @param {number} props.createdEpochNo - The created epoch number of the governance action.
 * @param {string} props.txHash - The transaction hash of the governance action.
 * @param {number} props.index - The index of the governance action.
 * @param {string} props.metadataStatus - The metadata status of the governance action.
 * @param {boolean} props.metadataValid - Indicates if the metadata is valid.
 * @param {string} props.title - The title of the governance action.
 * @returns {JSX.Element} The rendered component.
 */
export const GovernanceActionCard: FC<ActionTypeProps> = ({
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
}) => {
  const { isMobile, screenWidth } = useScreenDimension();

  const govActionId = getFullGovActionId(txHash, index);

  const boxWidth = useMemo(() => {
    if (screenWidth < 420) {
      return 290;
    }
    if (isMobile) {
      return 324;
    }
    return 350;
  }, [screenWidth, isMobile]);

  return (
    <Box
      sx={{
        width: boxWidth,
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
