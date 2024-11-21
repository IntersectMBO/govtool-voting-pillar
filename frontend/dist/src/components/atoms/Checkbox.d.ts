import { ChangeEvent } from 'react';
import { CheckboxProps as MUICheckboxProps } from '@mui/material';
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
export declare const Checkbox: ({ dataTestId, errorMessage, sx, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
