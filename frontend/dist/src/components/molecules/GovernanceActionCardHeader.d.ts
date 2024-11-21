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
export declare const GovernanceActionCardHeader: ({ title, isDataMissing, }: GovernanceActionCardHeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
