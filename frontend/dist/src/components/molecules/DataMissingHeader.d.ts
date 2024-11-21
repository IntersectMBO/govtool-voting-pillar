import { SxProps } from '@mui/material';
import { MetadataValidationStatus } from '../../models';
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
export declare const DataMissingHeader: ({ title, isDataMissing, shareLink, titleStyle, }: DataMissingHeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
