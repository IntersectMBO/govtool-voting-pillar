/// <reference types="react" />
import { SxProps } from '@mui/material/styles';
interface Props {
    variant?: 'modal' | 'popup';
    onClose?: () => void;
    hideCloseButton?: boolean;
    children: React.ReactNode;
    dataTestId?: string;
    sx?: SxProps;
}
export declare const BaseWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & Pick<Props, "variant">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const CloseButton: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;
/**
 * Wrapper component for modals.
 *
 * @component
 * @example
 * ```tsx
 * <ModalWrapper onClose={handleClose}>
 *   <ModalContent />
 * </ModalWrapper>
 * ```
 *
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the underlying HTML div element.
 * @param {Props} props - The component props.
 * @param {React.ReactNode} props.children - The content of the modal.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @param {string} [props.variant='modal'] - The variant of the modal.
 * @param {boolean} [props.hideCloseButton=false] - Whether to hide the close button.
 * @param {string} [props.dataTestId='modal'] - The data-testid attribute for testing purposes.
 * @param {object} [props.sx] - The custom styles for the modal.
 * @returns {JSX.Element} The rendered ModalWrapper component.
 */
export declare const ModalWrapper: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export {};
