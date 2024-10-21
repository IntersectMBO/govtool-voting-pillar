import {
  Typography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';

export type FormErrorMessageProps = {
  errorMessage?: string;
  errorStyles?: MUITypographyProps;
};

/**
 * Renders an error message for a form field.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.errorMessage - The error message to display.
 * @param {Object} props.errorStyles - Additional styles for the error message.
 * @returns {JSX.Element | null} The rendered error message or null if there is no error message.
 */
export const FormErrorMessage = ({
  errorMessage,
  errorStyles,
}: FormErrorMessageProps) => {
  if (!errorMessage) return null;
  return (
    <Typography
      color="red"
      data-testid={`${errorMessage.replace(/\s+/g, '-').toLowerCase()}-error`}
      fontSize={12}
      fontWeight={400}
      sx={{ mt: 0.25 }}
      {...errorStyles}
    >
      {errorMessage}
    </Typography>
  );
};
