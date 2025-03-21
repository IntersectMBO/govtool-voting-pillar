import { SxProps } from '@mui/material';
import { MetadataValidationStatus } from '../../models';
/**
 * Renders an information box when data is missing for a governance action.
 * @param isDataMissing - The status of the missing data.
 * @param isInProgress - Indicates if the governance action is in progress.
 * @param isSubmitted - Indicates if the governance action has been submitted.
 * @param sx - Additional styling properties for the box.
 * @returns The DataMissingInfoBox component.
 */
export declare const DataMissingInfoBox: ({ isDataMissing, isInProgress, isSubmitted, sx, }: {
    isDataMissing: MetadataValidationStatus | null;
    isInProgress?: boolean | undefined;
    isSubmitted?: boolean | undefined;
    sx?: SxProps<{}> | undefined;
}) => import("react/jsx-runtime").JSX.Element | null;
