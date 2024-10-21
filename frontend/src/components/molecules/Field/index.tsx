import React, { PropsWithChildren } from 'react';

import { Checkbox } from './Checkbox';
import { Input } from './Input';
import { TextArea } from './TextArea';

/**
 * Represents a composition of the `Field` component.
 * It is a functional component that can accept children and has additional static properties.
 */
type FieldComposition = React.FC<PropsWithChildren> & {
  Input: typeof Input;
  Checkbox: typeof Checkbox;
  TextArea: typeof TextArea;
};

const Field: FieldComposition = ({ children }) => <>{children}</>;

Field.Checkbox = Checkbox;
Field.Input = Input;
Field.TextArea = TextArea;

export { Field };

export * from './types';
