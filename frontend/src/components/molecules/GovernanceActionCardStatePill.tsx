import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import { Typography } from '../atoms';

/**
 * Renders a state pill for a governance action card.
 *
 * @param variant - The variant of the state pill. Can be 'inProgress' or 'voteSubmitted'.
 */
export const GovernanceActionCardStatePill = ({
  variant = 'voteSubmitted',
}: {
  variant?: 'inProgress' | 'voteSubmitted';
}) => (
  <Box
    sx={{
      position: 'absolute',
      top: -15,
      right: 30,
      bgcolor: variant === 'inProgress' ? '#F8ECD4' : '#E0F2DC',
      border: 1,
      borderColor: variant === 'inProgress' ? '#DEA029' : '#62BC52',
      px: 2.25,
      py: 0.5,
      borderRadius: 100,
    }}
  >
    <Typography
      sx={{
        color: variant === 'inProgress' ? '#DEA029' : '#62BC52',
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
      }}
      variant="body2"
    >
      {variant === 'voteSubmitted' && (
        <CheckIcon
          sx={{
            fontSize: '17px',
          }}
        />
      )}
      {variant === 'inProgress' ? 'In Progress' : 'Votes submitted'}
    </Typography>
  </Box>
);
