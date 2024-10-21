import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { TextareaAutosize, TextareaAutosizeProps, styled } from '@mui/material';

import { useScreenDimension } from '../../hooks';

export type TextAreaProps = TextareaAutosizeProps & {
  errorMessage?: string;
  isModifiedLayout?: boolean;
};

const TextAreaBase = styled(TextareaAutosize)(
  () => `
  font-family: "Poppins";
  font-weight: 400;
    ::placeholder {
      font-family: "Poppins";
      font-weight: 400;
      color: #a6a6a6;
    }
    `
);

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
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      errorMessage,
      maxLength = 500,
      onBlur,
      onFocus,
      isModifiedLayout,
      ...props
    },
    ref
  ) => {
    const { isMobile } = useScreenDimension();
    const textAraeRef = useRef<HTMLTextAreaElement>(null);

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        onFocus?.(e);
        textAraeRef.current?.focus();
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        onBlur?.(e);
        textAraeRef.current?.blur();
      },
      [onBlur]
    );

    useImperativeHandle(
      ref,
      () =>
        ({
          focus: handleFocus,
          blur: handleBlur,
          ...textAraeRef.current,
        }) as unknown as HTMLTextAreaElement,
      [handleBlur, handleFocus]
    );

    const getTexAreaHeight = () => {
      if (isModifiedLayout && isMobile) return '312px';
      if (isModifiedLayout) return '208px';
      if (isMobile) return '104px';
      return '128px';
    };

    return (
      <TextAreaBase
        style={{
          border: `1px solid ${errorMessage ? 'red' : '#6F99FF'}`,
          backgroundColor: errorMessage ? '#FAEAEB' : 'white',
          borderRadius: '24px',
          height: getTexAreaHeight(),
          outline: 'none',
          padding: '12px 14px',
          resize: 'none',
        }}
        maxLength={maxLength}
        ref={textAraeRef}
        sx={{
          fontSize: isModifiedLayout ? '12px' : 'auto',
          '&::placeholder': {
            fontSize: isModifiedLayout ? '12px' : '16px',
          },
        }}
        {...props}
      />
    );
  }
);
