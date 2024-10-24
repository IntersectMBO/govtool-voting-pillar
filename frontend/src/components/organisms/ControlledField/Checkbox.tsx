import { useCallback } from 'react';
import { Controller, get } from 'react-hook-form';

import { Field } from '../../molecules';

import { ControlledCheckboxProps, RenderInputProps } from './types';

/**
 * Checkbox component.
 *
 * @component
 * @param {ControlledCheckboxProps} props - The props for the Checkbox component.
 * @returns {JSX.Element} The rendered Checkbox component.
 */
export const Checkbox = ({
  control,
  name,
  errors,
  rules,
  ...props
}: ControlledCheckboxProps) => {
  const errorMessage = get(errors, name)?.message as string;

  const renderInput = useCallback(
    ({ field }: RenderInputProps) => (
      <Field.Checkbox
        checked={!!field.value}
        errorMessage={errorMessage}
        name={field.name}
        onChange={field.onChange}
        value={field.value}
        {...props}
      />
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
