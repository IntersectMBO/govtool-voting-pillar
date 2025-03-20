import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
type RadioProps = {
    isChecked: boolean;
    name: string;
    title: string;
    value: string;
    setValue: UseFormSetValue<any>;
    register: UseFormRegister<any>;
    dataTestId?: string;
    disabled?: boolean;
};
/**
 * Radio component represents a radio button input.
 *
 * @deprecated This component is deprecated in favor of replacing it with `@mui/material/Radio`.
 *
 * @component
 * @example
 * <Radio
 *   isChecked={true}
 *   name="radioOption"
 *   setValue={handleSetValue}
 *   title="Option 1"
 *   value="option1"
 *   dataTestId="radioOption1"
 *   register={register}
 *   disabled={false}
 * />
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isChecked - Indicates whether the radio button is checked.
 * @param {string} props.name - The name of the radio button.
 * @param {Function} props.setValue - The function to set the value of the radio button.
 * @param {string} props.title - The title of the radio button.
 * @param {string} props.value - The value of the radio button.
 * @param {string} props.dataTestId - The data-testid attribute value for testing purposes.
 * @param {Function} props.register - The function to register the radio button with a form library.
 * @param {boolean} props.disabled - Indicates whether the radio button is disabled.
 * @returns {JSX.Element} The rendered Radio component.
 */
export declare const Radio: ({ ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
export {};
