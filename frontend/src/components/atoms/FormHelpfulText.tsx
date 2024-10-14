import {
  Typography,
  TypographyProps as MUITypographyProps,
  SxProps,
} from '@mui/material';

export type FormHelpfulTextProps = {
  helpfulText?: string;
  helpfulTextStyle?: MUITypographyProps;
  sx?: SxProps;
};

/**
 * Renders a helpful text component for a form.
 *
 * @param {Object} props - The component props.
 * @param {string} props.helpfulText - The helpful text to be displayed.
 * @param {Object} props.helpfulTextStyle - The additional style for the helpful text.
 * @param {Object} props.sx - The additional style for the component.
 * @returns {JSX.Element | null} The rendered helpful text component.
 */
export const FormHelpfulText = ({
  helpfulText,
  helpfulTextStyle,
  sx,
}: FormHelpfulTextProps) => {
  if (!helpfulText) return null;
  return (
    <Typography
      color="#9792B5"
      data-testid={`${helpfulText.replace(/\s+/g, '-').toLowerCase()}-error`}
      fontSize={12}
      fontWeight={400}
      sx={{ mt: 0.5, ...sx }}
      {...helpfulTextStyle}
    >
      {helpfulText}
    </Typography>
  );
};
