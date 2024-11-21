/// <reference types="react" />
import { ControlledInputProps } from './types';
/**
 * A controlled input component that integrates with a form library.
 *
 * @component
 * @example
 * ```tsx
 * <Input
 *   control={control}
 *   name="firstName"
 *   errors={errors}
 *   rules={rules}
 *   placeholder="Enter your first name"
 * />
 * ```
 *
 * @param {ControlledInputProps} props - The component props.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to attach to the input element.
 * @returns {JSX.Element} The rendered input component.
 */
export declare const Input: import("react").ForwardRefExoticComponent<Omit<ControlledInputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
