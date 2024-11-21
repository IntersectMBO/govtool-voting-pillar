/// <reference types="react" />
import { InputFieldProps } from './types';
/**
 * A custom input field component.
 *
 * @component
 * @example
 * ```tsx
 * <Input
 *   label="Username"
 *   placeholder="Enter your username"
 *   onBlur={handleBlur}
 *   onFocus={handleFocus}
 *   errorMessage={error}
 *   helpfulText="Please enter your username"
 * />
 * ```
 */
export declare const Input: import("react").ForwardRefExoticComponent<Omit<InputFieldProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
