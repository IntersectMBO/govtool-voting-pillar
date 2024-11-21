import { To } from 'react-router-dom';
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
export declare const Breadcrumbs: ({ elementOne, elementOnePath, elementTwo, isDataMissing, }: BreadcrumbsProps) => import("react/jsx-runtime").JSX.Element;
export {};
