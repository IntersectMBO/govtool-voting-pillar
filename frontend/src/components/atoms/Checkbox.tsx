import { ChangeEvent, useId } from 'react';
import {
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
} from '@mui/material';

export type CheckboxProps = Omit<MUICheckboxProps, 'onChange' | 'value'> & {
  dataTestId?: string;
  errorMessage?: string;
  onChange: (newValue: ChangeEvent<Element> | boolean) => void;
  value: boolean;
};

/**
 * @deprecated This component is deprecated in favor of replacing it with `@mui/material/Checkbox`.
 * Please update your code accordingly.
 */
export const Checkbox = ({
  dataTestId,
  errorMessage,
  sx,
  ...props
}: CheckboxProps) => {
  const id = useId();

  return (
    <MUICheckbox
      id={id}
      inputProps={
        {
          'data-testid': dataTestId,
        } as React.InputHTMLAttributes<HTMLInputElement>
      }
      sx={{
        '& .MuiSvgIcon-root': { fontSize: 18 },
        color: errorMessage ? 'red' : '#0033AD',
        ...sx,
      }}
      {...props}
    />
  );
};
