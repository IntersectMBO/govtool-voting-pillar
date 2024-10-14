import { forwardRef, useCallback } from 'react';
import { Controller, get } from 'react-hook-form';

import { Field } from '../../molecules';

import { ControlledInputProps, RenderInputProps } from './types';

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
export const Input = forwardRef<HTMLInputElement, ControlledInputProps>(
  ({ control, name, errors, rules, ...props }, ref) => {
    const errorMessage = get(errors, name)?.message as string;

    const renderInput = useCallback(
      ({ field }: RenderInputProps) => (
        <Field.Input
          {...props}
          {...field}
          errorMessage={errorMessage}
          ref={ref}
        />
      ),
      [errorMessage, props, ref]
    );

    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={renderInput}
      />
    );
  }
);
