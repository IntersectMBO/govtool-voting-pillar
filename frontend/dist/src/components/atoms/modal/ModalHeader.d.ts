/// <reference types="react" />
import type { SxProps } from '@mui/system';
interface Props {
    children: React.ReactNode;
    sx?: SxProps;
}
/**
 * Renders the header of a modal.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the header.
 * @param {Object} props.sx - The custom styling for the header.
 * @returns {JSX.Element} The rendered modal header.
 */
export declare const ModalHeader: ({ children, sx }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
