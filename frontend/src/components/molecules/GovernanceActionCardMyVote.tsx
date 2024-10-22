import { Box } from '@mui/material';

import { Button, Typography } from '../atoms';
import { VotePill } from '../molecules';
import { openInNewTab } from '../../utils';
import { Vote } from '../../models';
import { usePillarContext } from '../../context';

type Props = {
  voteTxHash: string;
  vote: Vote;
};

export const GovernanceActionCardMyVote = ({ voteTxHash, vote }: Props) => {
  const { cExplorerBaseUrl } = usePillarContext();

  return (
    <Box data-testid="my-vote" mb="20px">
      <Typography
        variant="caption"
        sx={{
          fontWeight: 500,
          color: '#8E908E',
        }}
      >
        My Vote:
      </Typography>
      <Box
        sx={{
          mt: 1,
          px: '4px',
          py: '2px',
          display: 'flex',
          border: 1,
          borderColor: 'rgba(214, 226, 255, 1)',
          borderRadius: 20,
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Box flex={1}>
          <VotePill vote={vote} />
        </Box>
        <Button
          onClick={() => openInNewTab(`${cExplorerBaseUrl}/tx/${voteTxHash}`)}
          variant="text"
          size="small"
          sx={{
            paddingY: 0.75,
            flex: 1,
            whiteSpace: 'nowrap',
          }}
        >
          See transaction
        </Button>
      </Box>
    </Box>
  );
};
