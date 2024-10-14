import { Box } from '@mui/material';

import { useCallback } from 'react';
import { Typography } from '../atoms';
import { VotePill } from '../molecules';
import { IMAGES } from '../../consts';
import { correctAdaFormat } from '../../utils';
import { SubmittedVotesData } from '../../models';

type Props = {
  votes: SubmittedVotesData;
};

/**
 * Renders the component that displays the votes submitted for a governance action.
 *
 * @component
 * @param {Props} votes - The votes object containing the vote counts for different categories.
 * @returns {JSX.Element} The rendered VotesSubmitted component.
 */
export const VotesSubmitted = ({
  votes: {
    dRepYesVotes,
    dRepAbstainVotes,
    dRepNoVotes,
    poolYesVotes,
    poolAbstainVotes,
    poolNoVotes,
    ccYesVotes,
    ccAbstainVotes,
    ccNoVotes,
  },
}: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        alt="ga icon"
        src={IMAGES.govActionListImage}
        width="64px"
        height="64px"
        style={{ marginBottom: '24px' }}
      />
      <Typography
        sx={{
          fontSize: '22px',
          fontWeight: '600',
          lineHeight: '28px',
        }}
      >
        Votes submitted
      </Typography>
      <Typography
        sx={{
          fontSize: '22px',
          fontWeight: '500',
          lineHeight: '28px',
          mb: 3,
        }}
      >
        for this Governance Action
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4.5,
        }}
      >
        <VotesGroup
          type="dReps"
          yesVotes={dRepYesVotes}
          noVotes={dRepNoVotes}
          abstainVotes={dRepAbstainVotes}
        />
        <VotesGroup
          type="sPos"
          yesVotes={poolYesVotes}
          noVotes={poolNoVotes}
          abstainVotes={poolAbstainVotes}
        />
        <VotesGroup
          type="ccCommittee"
          yesVotes={ccYesVotes}
          noVotes={ccNoVotes}
          abstainVotes={ccAbstainVotes}
        />
      </Box>
    </Box>
  );
};

type VoterType = 'ccCommittee' | 'dReps' | 'sPos';

type VotesGroupProps = {
  type: VoterType;
  yesVotes: number;
  noVotes: number;
  abstainVotes: number;
};

const VotesGroup = ({
  type,
  yesVotes,
  noVotes,
  abstainVotes,
}: VotesGroupProps) => {
  const getLabel = useCallback(() => {
    switch (type) {
      case 'ccCommittee':
        return 'Constitutional Committee';
      case 'dReps':
        return 'DReps';
      case 'sPos':
        return 'SPOs';
      default:
        return '';
    }
  }, [type]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '24px',
        }}
      >
        {getLabel()}
      </Typography>
      <Vote type={type} vote="yes" value={yesVotes} />
      <Vote type={type} vote="abstain" value={abstainVotes} />
      <Vote type={type} vote="no" value={noVotes} />
    </Box>
  );
};

type VoteProps = {
  type: VoterType;
  vote: VoteType;
  value: number;
};
const Vote = ({ type, vote, value }: VoteProps) => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: 1.5,
    }}
  >
    <VotePill vote={vote} width={115} isCC={type === 'ccCommittee'} />
    <Typography
      data-testid={`submitted-votes-${type}-${vote}`}
      sx={{
        fontSize: 16,
        wordBreak: 'break-all',
      }}
    >
      {type === 'sPos' ? value : `₳ ${correctAdaFormat(value)}`}
    </Typography>
  </Box>
);
