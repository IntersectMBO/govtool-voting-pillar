import { Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { Tooltip, Typography } from '../atoms';
import { getMetadataDataMissingStatusTranslation } from '../../utils';
import { MetadataValidationStatus } from '../../models';

type GovernanceActionCardHeaderProps = {
  title?: string;
  isDataMissing: MetadataValidationStatus | null;
};

/**
 * Renders the header for a governance action card.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card header.
 * @param {boolean} props.isDataMissing - Indicates whether data is missing for the card.
 * @returns {JSX.Element} The rendered component.
 */
export const GovernanceActionCardHeader = ({
  title,
  isDataMissing,
}: GovernanceActionCardHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: '20px',
        overflow: 'hidden',
      }}
      data-testid="governance-action-card-header"
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 600,
          lineHeight: '24px',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          wordBreak: 'break-word',
          ...(isDataMissing && { color: 'errorRed' }),
        }}
      >
        {(isDataMissing &&
          getMetadataDataMissingStatusTranslation(
            isDataMissing as MetadataValidationStatus
          )) ||
          title}
      </Typography>
      {isDataMissing && typeof isDataMissing === 'string' && (
        <Tooltip
          heading={getMetadataDataMissingStatusTranslation(
            isDataMissing as MetadataValidationStatus
          )}
          paragraphOne="Please click “View Details” for more information."
          placement="bottom-end"
          arrow
        >
          <InfoOutlinedIcon
            style={{
              color: '#ADAEAD',
            }}
            sx={{ ml: 0.7 }}
            fontSize="small"
          />
        </Tooltip>
      )}
    </Box>
  );
};
