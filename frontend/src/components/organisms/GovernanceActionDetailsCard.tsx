import { useState } from 'react';
import { Box } from '@mui/material';

import { useScreenDimension } from '../../hooks';
import {
  GovernanceActionCardStatePill,
  GovernanceActionDetailsCardVotes,
  GovernanceActionDetailsCardData,
} from '../molecules';
import {
  MetadataValidationStatus,
  ProposalData,
  ProposalVote,
} from '../../models';
import { usePillarContext } from '../../context';

type GovernanceActionDetailsCardProps = {
  isDashboard?: boolean;
  isDataMissing: null | MetadataValidationStatus;
  isInProgress?: boolean;
  isVoter?: boolean;
  vote?: ProposalVote;
  proposal: ProposalData;
};

/**
 * Renders the Governance Action Details Card component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isDashboard - Indicates if the component is rendered in the dashboard.
 * @param {boolean} props.isDataMissing - Indicates if there is missing data.
 * @param {boolean} props.isInProgress - Indicates if the action is in progress.
 * @param {boolean} [props.isVoter=true] - Indicates if the user is a voter.
 * @param {Function} props.vote - The vote function.
 * @param {Object} props.proposal - The proposal object.
 * @returns {JSX.Element} The rendered Governance Action Details Card component.
 */
export const GovernanceActionDetailsCard = ({
  isDashboard,
  isDataMissing,
  isInProgress,
  isVoter = true,
  vote,
  proposal,
}: GovernanceActionDetailsCardProps) => {
  const { isEnabled } = usePillarContext();
  const [isVoteSubmitted, setIsVoteSubmitted] = useState<boolean>(false);
  const { screenWidth, isMobile } = useScreenDimension();

  const isOneColumn = (isDashboard && screenWidth < 1036) ?? isMobile;

  return (
    <Box
      sx={{
        borderRadius: '20px',
        display: 'grid',
        gridTemplateColumns: isOneColumn ? undefined : '0.6fr 0.4fr',
        mt: '12px',
        width: '100%',
        position: 'relative',
        boxShadow: isInProgress
          ? '2px 2px 20px 0px rgba(245, 90, 0, 0.20)'
          : isVoteSubmitted && !isDataMissing
            ? '2px 2px 20px 0px rgba(98, 188, 82, 0.20)'
            : '2px 2px 20px 0px rgba(47, 98, 220, 0.20)',
        ...(isDataMissing && {
          border: '1px solid #F6D5D5',
        }),
      }}
      data-testid="governance-action-details-card"
    >
      {(isVoteSubmitted || isInProgress) && (
        <GovernanceActionCardStatePill
          variant={isVoteSubmitted ? 'voteSubmitted' : 'inProgress'}
        />
      )}
      <GovernanceActionDetailsCardData
        isDashboard={isDashboard}
        isDataMissing={isDataMissing}
        isInProgress={isInProgress}
        isOneColumn={isOneColumn}
        isSubmitted={isVoteSubmitted}
        proposal={proposal}
      />
      <GovernanceActionDetailsCardVotes
        setIsVoteSubmitted={setIsVoteSubmitted}
        isVoter={isVoter}
        vote={vote}
        isDashboard={isEnabled}
        isOneColumn={isOneColumn}
        isInProgress={isInProgress}
        proposal={proposal}
      />
    </Box>
  );
};
