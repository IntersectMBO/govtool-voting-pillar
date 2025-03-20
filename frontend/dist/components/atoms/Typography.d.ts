import { TypographyProps } from './types';
/**
 * A custom Typography component.
 *
 * @deprecated Should be replaced with @mui/material/Typography.
 *
 * @component
 * @example
 * ```tsx
 * <Typography variant="body1" color="primary">
 *   Hello, world!
 * </Typography>
 * ```
 *
 * @param {string} color - The color of the text.
 * @param {string} variant - The variant of the text.
 * @param {ReactNode} children - The content to be displayed inside the Typography component.
 * @returns {JSX.Element} The rendered Typography component.
 */
export declare const Typography: ({ color, variant, ...props }: TypographyProps) => import("react/jsx-runtime").JSX.Element;
