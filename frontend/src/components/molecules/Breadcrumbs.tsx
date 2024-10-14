import { NavLink, To } from 'react-router-dom';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';

import { useScreenDimension } from '../../hooks';
import { Typography } from '../atoms';
import { getMetadataDataMissingStatusTranslation } from '../../utils';
import { MetadataValidationStatus } from '../../models';

type BreadcrumbsProps = {
  elementOne: string;
  elementOnePath: To;
  elementTwo: string;
  isDataMissing: MetadataValidationStatus | null;
};

/**
 * Renders a breadcrumb component.
 *
 * @param {BreadcrumbsProps} props - The props for the Breadcrumbs component.
 * @param {string} props.elementOne - The label for the first breadcrumb element.
 * @param {string} props.elementOnePath - The path for the first breadcrumb element.
 * @param {string} props.elementTwo - The label for the second breadcrumb element.
 * @param {boolean} props.isDataMissing - Indicates if data is missing.
 * @returns {JSX.Element} The rendered Breadcrumbs component.
 */
export const Breadcrumbs = ({
  elementOne,
  elementOnePath,
  elementTwo,
  isDataMissing,
}: BreadcrumbsProps) => {
  const { isMobile } = useScreenDimension();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: `2px 0 ${isMobile ? '44px' : '24px'}`,
      }}
    >
      <NavLink to={elementOnePath} style={{ textDecorationColor: '#0033AD' }}>
        <Typography
          color="primary"
          variant="caption"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          {elementOne}
        </Typography>
      </NavLink>
      <Divider
        orientation="vertical"
        flexItem
        color="textBlack"
        sx={{ margin: '0 6px' }}
      />
      <Typography
        variant="caption"
        sx={{
          fontWeight: 500,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {(isDataMissing &&
          getMetadataDataMissingStatusTranslation(
            isDataMissing as MetadataValidationStatus
          )) ||
          elementTwo}
      </Typography>
    </Box>
  );
};
