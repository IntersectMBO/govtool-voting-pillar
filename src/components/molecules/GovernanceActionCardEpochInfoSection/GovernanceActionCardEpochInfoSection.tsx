import { FC } from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  submissionDate: string;
  submissionEpoch: number;
  expiryDate: string;
  expiryEpoch: number;
};

/**
 * Renders the epoch information section of the governance action card.
 *
 * @param submissionDate - The date of submission.
 * @param submissionEpoch - The epoch of submission.
 * @param expiryDate - The date of expiry.
 * @param expiryEpoch - The epoch of expiry.
 */
export const GovernanceActionCardEpochInfoSection: FC<Props> = ({
  submissionDate,
  submissionEpoch,
  expiryDate,
  expiryEpoch,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(214, 226, 255, 0.5)',
        border: '1px solid #d6e2ff',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ p: '6px', display: 'flex' }}>
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '16px',
          }}
        >
          Submitted:
        </Typography>
        <Typography
          sx={{ fontWeight: 600, fontSize: '12px', lineHeight: '16px' }}
        >
          {submissionDate}
        </Typography>
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '16px',
          }}
        >
          (Epoch {submissionEpoch})
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '12px',
            }}
          >
            ⓘ
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          backgroundColor: 'white',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ p: '6px', display: 'flex' }}>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '16px',
            }}
          >
            Expires:
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: '12px', lineHeight: '16px' }}
          >
            {expiryDate}
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '16px',
            }}
          >
            (Epoch {expiryEpoch})
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ml: '8px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '12px',
              }}
            >
              ⓘ
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
