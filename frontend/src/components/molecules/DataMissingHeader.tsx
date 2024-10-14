import { Box, SxProps } from '@mui/material';

import { Typography } from '../atoms';
import { Share } from '../organisms';
import { MetadataValidationStatus } from '../../models';
import { getMetadataDataMissingStatusTranslation } from '../../utils';

type DataMissingHeaderProps = {
  isDataMissing: MetadataValidationStatus | null;
  shareLink?: string;
  title?: string;
  titleStyle?: SxProps;
};

/**
 * Renders a header component for displaying missing data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the header.
 * @param {boolean} props.isDataMissing - Indicates whether data is missing.
 * @param {string} props.shareLink - The share link for the header.
 * @param {Object} props.titleStyle - The custom styles for the title.
 * @returns {JSX.Element} The rendered header component.
 */
export const DataMissingHeader = ({
  title,
  isDataMissing,
  shareLink,
  titleStyle,
}: DataMissingHeaderProps) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 2,
      alignItems: 'center',
      mb: 2,
    }}
    data-testid="governance-action-details-card-header"
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontWeight: 600,
          ...(isDataMissing && { color: 'errorRed' }),
          ...titleStyle,
        }}
        variant="title2"
      >
        {(isDataMissing &&
          getMetadataDataMissingStatusTranslation(
            isDataMissing as MetadataValidationStatus
          )) ||
          title}
      </Typography>
    </Box>
    {shareLink && <Share link={shareLink} />}
  </Box>
);
