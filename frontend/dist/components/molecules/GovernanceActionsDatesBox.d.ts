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
export declare const GovernanceActionsDatesBox: ({ createdDate, expiryDate, expiryEpochNo, createdEpochNo, isSliderCard, }: GovernanceActionsDatesBoxProps) => import("react/jsx-runtime").JSX.Element;
export {};
