import { Box, Link, SxProps } from '@mui/material';

import { Typography } from '../atoms';
import { MetadataValidationStatus } from '../../models';
import { openInNewTab } from '../../utils';

/**
 * Renders an information box when data is missing for a governance action.
 * @param isDataMissing - The status of the missing data.
 * @param isInProgress - Indicates if the governance action is in progress.
 * @param isSubmitted - Indicates if the governance action has been submitted.
 * @param sx - Additional styling properties for the box.
 * @returns The DataMissingInfoBox component.
 */
export const DataMissingInfoBox = ({
  isDataMissing,
  isInProgress,
  isSubmitted,
  sx,
}: {
  isDataMissing: MetadataValidationStatus | null;
  isInProgress?: boolean;
  isSubmitted?: boolean;
  sx?: SxProps;
}) => {
  const gaMetadataErrorMessage = {
    [MetadataValidationStatus.URL_NOT_FOUND]:
      'The data that was originally used when this Governance Action was created has not been found.',
    [MetadataValidationStatus.INVALID_JSONLD]:
      'The data that was originally used when this Governance Action was created has been formatted incorrectly.',
    [MetadataValidationStatus.INVALID_HASH]:
      'The data that was originally used when this Governance Action was created has changed.',
    [MetadataValidationStatus.INCORRECT_FORMAT]:
      'The data that was originally used when this Governance Action was created has been formatted incorrectly.',
  }[isDataMissing as MetadataValidationStatus];

  const gaMetadataErrorDescription = {
    [MetadataValidationStatus.URL_NOT_FOUND]:
      'GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that GovTool cannot locate the data on the URL specified when the Governance Action was originally posted.',
    [MetadataValidationStatus.INVALID_JSONLD]:
      'GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data format as defined by the Cardano community.',
    [MetadataValidationStatus.INVALID_HASH]:
      'GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data when the Governance Action was originally posted.',
    [MetadataValidationStatus.INCORRECT_FORMAT]:
      'GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data format as defined by the Cardano community.',
  }[isDataMissing as MetadataValidationStatus];

  return isDataMissing && !isSubmitted && !isInProgress ? (
    <Box
      sx={{
        mb: 4,
        pr: 6,
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: 500,
          color: 'errorRed',
          mb: 0.5,
        }}
      >
        {gaMetadataErrorMessage}
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          color: 'errorRed',
          mb: 0.5,
        }}
      >
        {gaMetadataErrorDescription}
      </Typography>
      <Link
        onClick={() =>
          openInNewTab(
            'https://docs.gov.tools/using-govtool/govtool-functions/dreps/drep-error-conditions'
          )
        }
        sx={{
          fontFamily: 'Poppins',
          fontSize: '16px',
          lineHeight: '24px',
          cursor: 'pointer',
        }}
      >
        Learn more
      </Link>
    </Box>
  ) : null;
};
