import { SxProps } from '@mui/material';
export type LinkWithIconProps = {
    label: string;
    onClick: () => void;
    icon?: JSX.Element;
    sx?: SxProps;
    cutWithEllipsis?: boolean;
    dataTestId?: string;
};
/**
 * A component that renders a link with an optional icon.
 *
 * @component
 * @example
 * // Renders a link with a back arrow icon and the label "Go Back"
 * <LinkWithIcon label="Go Back" icon={<ArrowBackIcon />} onClick={handleClick} />
 *
 * @param {Object} props - The component props.
 * @param {string} props.dataTestId - The data-testid attribute for testing purposes.
 * @param {string} props.label - The label text for the link.
 * @param {Function} props.onClick - The click event handler for the link.
 * @param {ReactNode} props.icon - The optional icon element to display.
 * @param {Object} props.sx - The custom styles for the link container.
 * @param {boolean} props.cutWithEllipsis - Whether to cut the label text with an ellipsis if it overflows.
 * @returns {JSX.Element} The rendered LinkWithIcon component.
 */
export declare const LinkWithIcon: ({ dataTestId, label, onClick, icon, sx, cutWithEllipsis, }: LinkWithIconProps) => import("react/jsx-runtime").JSX.Element;
