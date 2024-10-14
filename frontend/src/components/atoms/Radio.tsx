/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { Typography } from '../atoms';
import { voltaire } from '../../theme/voltaire';

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
export const Radio = ({ ...props }: RadioProps) => {
  const {
    isChecked,
    name,
    setValue,
    title,
    value,
    dataTestId,
    register,
    disabled,
  } = props;

  const handleClick = () => {
    setValue(name, value);
  };

  return (
    <Box
      data-testid={dataTestId}
      onClick={() => {
        if (!disabled) handleClick();
      }}
      borderRadius={isChecked ? '15px' : '12px'}
      p={isChecked ? '2px' : 0}
      border={isChecked ? 2 : 0}
      borderColor={isChecked ? 'specialCyanBorder' : undefined}
      sx={[
        {
          boxShadow: voltaire.shadows[1],

          '&:hover': {
            color: 'blue',
            cursor: disabled ? 'default' : 'pointer',
          },
        },
      ]}
    >
      <input
        type="radio"
        value={value}
        {...register(name)}
        style={{ display: 'none' }}
        checked={isChecked}
      />
      <Box
        borderRadius="12px"
        bgcolor={isChecked ? 'specialCyan' : 'white'}
        py={1.5}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: isChecked ? 'white' : 'textBlack',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
