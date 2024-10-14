import { Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useScreenDimension } from '../../hooks';
import { Tooltip, Typography } from '../atoms';
import { formatDisplayDate } from '../../utils';

type GovernanceActionsDatesBoxProps = {
  createdDate: string;
  expiryDate: string | undefined;
  expiryEpochNo: number | undefined;
  createdEpochNo: number;
  isSliderCard?: boolean;
};

/**
 * Renders a box displaying the submission date and expiry date of a governance action.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Date} props.createdDate - The date when the governance action was submitted.
 * @param {Date} props.expiryDate - The date when the governance action will expire if it doesn't reach ratification thresholds.
 * @param {number} props.expiryEpochNo - The epoch number of the expiry date.
 * @param {number} props.createdEpochNo - The epoch number of the submission date.
 * @param {boolean} props.isSliderCard - Indicates whether the component is used in a slider card.
 * @returns {JSX.Element} - The rendered component.
 */
export const GovernanceActionsDatesBox = ({
  createdDate,
  expiryDate,
  expiryEpochNo,
  createdEpochNo,
  isSliderCard,
}: GovernanceActionsDatesBoxProps) => {
  const { screenWidth } = useScreenDimension();

  const isFontSizeSmaller = screenWidth < 420;

  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'lightBlue',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        mb: isSliderCard ? '20px' : '32px',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          bgcolor: '#D6E2FF80',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          py: '6px',
          width: '100%',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: isFontSizeSmaller ? 11 : 12,
            fontWeight: 300,
          }}
          data-testid="submission-date"
        >
          Submitted:{' '}
          <Typography
            component="span"
            sx={{
              fontSize: isFontSizeSmaller ? 11 : 12,
              fontWeight: 600,
            }}
          >
            {formatDisplayDate(createdDate)}
          </Typography>
          <Typography
            component="span"
            variant="caption"
            sx={{
              fontSize: isFontSizeSmaller ? 11 : 12,
              fontWeight: 300,
            }}
          >{` (Epoch ${createdEpochNo})`}</Typography>
        </Typography>
        <Tooltip
          heading="Submission Date"
          paragraphOne="The date when the governance action was submitted on-chain."
          placement="bottom-end"
          arrow
        >
          <InfoOutlinedIcon
            sx={{
              ml: 0.5,
              fontSize: isFontSizeSmaller ? '18px' : '19px',
              color: '#ADAEAD',
            }}
          />
        </Tooltip>
      </Box>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          py: 0.75,
          width: '100%',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: isFontSizeSmaller ? 11 : 12,
            fontWeight: 300,
          }}
          data-testid="expiry-date"
        >
          Expires:{' '}
          <Typography
            component="span"
            sx={{
              fontSize: isFontSizeSmaller ? 11 : 12,
              fontWeight: 600,
            }}
          >
            {expiryDate ? formatDisplayDate(expiryDate) : '-'}
          </Typography>
          <Typography
            component="span"
            variant="caption"
            sx={{
              fontSize: isFontSizeSmaller ? 11 : 12,
              fontWeight: 300,
            }}
          >{` (Epoch ${expiryEpochNo})`}</Typography>
        </Typography>
        <Tooltip
          heading="Expiry Date"
          paragraphOne="The date when the governance action will expiry if it doesn’t reach ratification thresholds."
          paragraphTwo="IMPORTANT: If the governance action is ratified before the expiry date it will be considered ratified and it will not be available to vote on afterwards."
          placement="bottom-end"
          arrow
        >
          <InfoOutlinedIcon
            sx={{
              ml: 0.5,
              fontSize: isFontSizeSmaller ? '18px' : '19px',
              color: '#ADAEAD',
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};
