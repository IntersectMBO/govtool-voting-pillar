/// <reference types="react" />
import { InputBaseProps } from '@mui/material';
export type InputProps = InputBaseProps & {
    dataTestId?: string;
    errorMessage?: string;
};
/**
 * A customizable input component.
 *
 * @component
 * @example
 * // Usage:
 * <Input
 *   errorMessage="Invalid input"
 *   dataTestId="input-field"
 *   onBlur={handleBlur}
 *   onFocus={handleFocus}
 *   sx={{ marginTop: '10px' }}
 *   // ...other props
 * />
 *
 * @param {string} errorMessage - The error message to display when the input is invalid.
 * @param {string} dataTestId - The data-testid attribute value for testing purposes.
 * @param {Function} onBlur - The event handler for the blur event.
 * @param {Function} onFocus - The event handler for the focus event.
 * @param {Object} sx - The custom styles to apply to the input component.
 * @param {any} rest - The remaining props to be passed to the input component.
 * @returns {JSX.Element} The rendered Input component.
 */
export declare const Input: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
