import { ButtonProps } from './types';
/**
 * @deprecated Should be replaced with @mui/material/button.
 * A customizable button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.size='large'] - The size of the button. Possible values are 'extraLarge', 'large', 'medium', and 'small'.
 * @param {string} [props.variant='contained'] - The variant of the button. Possible values are 'contained', 'outlined', and 'text'.
 * @param {Object} [props.sx] - The custom styles for the button.
 * @param {boolean} [props.isLoading] - Determines whether the button is in a loading state.
 * @param {ReactNode} [props.children] - The content of the button.
 * @param {boolean} [props.disabled] - Determines whether the button is disabled.
 * @returns {JSX.Element} The rendered button component.
 */
export declare const Button: ({ size, variant, sx, isLoading, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
