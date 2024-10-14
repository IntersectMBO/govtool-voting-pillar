import React, { PropsWithChildren } from 'react';

import { Checkbox } from './Checkbox';
import { Input } from './Input';
import { TextArea } from './TextArea';

type ControlledFieldComposition = React.FC<PropsWithChildren> & {
  Checkbox: typeof Checkbox;
  Input: typeof Input;
  TextArea: typeof TextArea;
};

/**
 * A component that represents a controlled field.
 *
 * @component
 * @param {ControlledFieldCompositionProps} props - The props for the ControlledField component.
 * @returns {JSX.Element} The rendered ControlledField component.
 */
const ControlledField: ControlledFieldComposition = ({ children }) => (
  <>{children}</>
);

ControlledField.Checkbox = Checkbox;
ControlledField.Input = Input;
ControlledField.TextArea = TextArea;

export { ControlledField };
