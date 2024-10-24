import { Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/material';

import { useScreenDimension } from '../../hooks';
import { VotesSubmitted } from '.';
import { VoteActionForm } from '../organisms';
import { ProposalData, ProposalVote } from '../../models';
import { usePillarContext } from '../../context';

type GovernanceActionCardVotesProps = {
  setIsVoteSubmitted: Dispatch<SetStateAction<boolean>>;
  isOneColumn: boolean;
  isDashboard?: boolean;
  isInProgress?: boolean;
  isVoter?: boolean;
  vote?: ProposalVote;
  proposal: ProposalData;
};

export const GovernanceActionDetailsCardVotes = ({
  setIsVoteSubmitted,
  isOneColumn,
  isVoter,
  vote,
  isDashboard,
  isInProgress,
  proposal,
}: GovernanceActionCardVotesProps) => {
  const { isVotingOnGovernanceActionEnabled } = usePillarContext();
  const { screenWidth } = useScreenDimension();

  const isModifiedPadding =
    (isDashboard && screenWidth < 1368) ?? screenWidth < 1100;

  return (
    <Box
      sx={{
        borderRadius: isOneColumn ? '0 0 20px 20px' : '0 20px 20px 0',
        bgcolor: 'rgba(255, 255, 255, 0.60)',
        p: `40px ${isModifiedPadding ? '24px' : '80px'}`,
      }}
    >
      {isVoter && isVotingOnGovernanceActionEnabled(proposal.type) ? (
        <VoteActionForm
          setIsVoteSubmitted={setIsVoteSubmitted}
          proposal={proposal}
          previousVote={vote}
          isInProgress={isInProgress}
        />
      ) : (
        <VotesSubmitted votes={proposal} />
      )}
    </Box>
  );
};
