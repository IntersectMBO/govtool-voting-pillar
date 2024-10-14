import {
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';
import { InputBase, InputBaseProps } from '@mui/material';

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
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, dataTestId, onBlur, onFocus, sx, ...rest }, ref) => {
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        onFocus?.(e);
        inputRef.current?.focus();
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur?.(e);
        inputRef.current?.blur();
      },
      [onBlur]
    );

    useImperativeHandle(
      ref,
      () =>
        ({
          focus: handleFocus,
          blur: handleBlur,
          ...inputRef.current,
        }) as unknown as HTMLInputElement,
      [handleBlur, handleFocus]
    );

    return (
      <InputBase
        id={id}
        inputProps={{ 'data-testid': dataTestId }}
        inputRef={inputRef}
        sx={{
          backgroundColor: errorMessage ? 'inputRed' : 'white',
          border: 1,
          borderColor: errorMessage ? 'red' : 'secondaryBlue',
          borderRadius: 50,
          padding: '8px 16px',
          width: '100%',
          '& input.Mui-disabled': {
            WebkitTextFillColor: '#4C495B',
          },
          '&.Mui-disabled': {
            backgroundColor: '#F5F5F8',
            borderColor: '#9792B5',
          },
          ...sx,
        }}
        {...rest}
      />
    );
  }
);
