import { useCallback } from 'react';
import { Controller, get } from 'react-hook-form';

import { Field } from '../../molecules';

import { ControlledTextAreaProps, RenderInputProps } from './types';

/**
 * A controlled textarea component that integrates with form libraries like React Hook Form.
 *
 * @component
 * @example
 * // Usage:
 * <TextArea
 *   control={control}
 *   name="myTextarea"
 *   errors={errors}
 *   rules={rules}
 *   placeholder="Enter your text"
 * />
 *
 * @param {ControlledTextAreaProps} props - The props for the TextArea component.
 * @param {Control} props.control - The control object from the form library.
 * @param {string} props.name - The name of the textarea field.
 * @param {Record<string, FieldError>} props.errors - The errors object from the form library.
 * @param {RegisterOptions} props.rules - The validation rules for the textarea field.
 * @returns {JSX.Element} The rendered TextArea component.
 */
export const TextArea = ({
  control,
  name,
  errors,
  rules,
  ...props
}: ControlledTextAreaProps) => {
  const errorMessage = get(errors, name)?.message as string;

  const renderInput = useCallback(
    ({ field }: RenderInputProps) => (
      <Field.TextArea {...props} {...field} errorMessage={errorMessage} />
    ),
    [errorMessage, props]
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={renderInput}
    />
  );
};
