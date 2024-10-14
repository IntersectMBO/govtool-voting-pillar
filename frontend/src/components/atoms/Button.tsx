import { CircularProgress, Button as MUIButton } from '@mui/material';

import { ButtonProps } from './types';

/**
 * @deprecated Should be replaced with @mui/material/button.
 * A customizable button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.size='large'] - The size of the button. Possible values are 'extraLarge', 'large', 'medium', and 'small'.
 * @param {string} [props.variant='contained'] - The variant of the button. Possible values are 'contained', 'outlined', and 'text'.
 * @param {Object} [props.sx] - The custom styles for the button.
 * @param {boolean} [props.isLoading] - Determines whether the button is in a loading state.
 * @param {ReactNode} [props.children] - The content of the button.
 * @param {boolean} [props.disabled] - Determines whether the button is disabled.
 * @returns {JSX.Element} The rendered button component.
 */
export const Button = ({
  size = 'large',
  variant = 'contained',
  sx,
  isLoading,
  ...props
}: ButtonProps) => {
  const height = {
    extraLarge: 48,
    large: 40,
    medium: 36,
    small: 32,
  }[size];

  const px = {
    extraLarge: 3.5,
    large: 3.25,
    medium: 3,
    small: 3,
  }[size];

  return (
    <MUIButton
      sx={{
        fontSize: size === 'extraLarge' ? 16 : 14,
        height,
        px,
        whiteSpace: 'nowrap',
        ...sx,
      }}
      variant={variant}
      {...props}
      disabled={isLoading || props?.disabled}
    >
      {isLoading && (
        <CircularProgress size={26} sx={{ position: 'absolute' }} />
      )}
      {props.children}
    </MUIButton>
  );
};
