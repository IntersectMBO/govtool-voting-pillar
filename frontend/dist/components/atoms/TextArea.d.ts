import { TextareaAutosizeProps } from '@mui/material';
export type TextAreaProps = TextareaAutosizeProps & {
    errorMessage?: string;
    isModifiedLayout?: boolean;
};
/**
 * Represents a textarea input component.
 *
 * @deprecated This component is deprecated in favor of replacing it with `@mui/material/TextareaAutosize`.
 *
 * @component
 * @example
 * ```tsx
 * <TextArea
 *   errorMessage="Invalid input"
 *   maxLength={500}
 *   onBlur={handleBlur}
 *   onFocus={handleFocus}
 *   isModifiedLayout={true}
 *   // other props
 * />
 * ```
 */
export declare const TextArea: import('react').ForwardRefExoticComponent<Omit<TextAreaProps, "ref"> & import('react').RefAttributes<HTMLTextAreaElement>>;
