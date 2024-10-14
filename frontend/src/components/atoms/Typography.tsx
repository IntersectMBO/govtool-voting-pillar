import { Typography as MUITypography } from '@mui/material';
import { TypographyProps } from './types';

/**
 * A custom Typography component.
 *
 * @deprecated Should be replaced with @mui/material/Typography.
 *
 * @component
 * @example
 * ```tsx
 * <Typography variant="body1" color="primary">
 *   Hello, world!
 * </Typography>
 * ```
 *
 * @param {string} color - The color of the text.
 * @param {string} variant - The variant of the text.
 * @param {ReactNode} children - The content to be displayed inside the Typography component.
 * @returns {JSX.Element} The rendered Typography component.
 */
export const Typography = ({
  color,
  variant = 'body1',
  ...props
}: TypographyProps) => {
  const fontSize = {
    headline1: 100,
    headline2: 57,
    headline3: 36,
    headline4: 32,
    headline5: 28,
    title1: 24,
    title2: 22,
    body1: 16,
    body2: 14,
    caption: 12,
  }[variant];

  const fontWeight = {
    headline1: 600,
    headline2: 700,
    headline3: 400,
    headline4: 600,
    headline5: 500,
    title1: 400,
    title2: 500,
    body1: 600,
    body2: 500,
    caption: 400,
  }[variant];

  const lineHeight = {
    headline1: '110px',
    headline2: '57px',
    headline3: '44px',
    headline4: '40px',
    headline5: '36px',
    title1: '32px',
    title2: '28px',
    body1: '24px',
    body2: '20px',
    caption: '16px',
  }[variant];

  return (
    <MUITypography
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...props}
    >
      {props.children}
    </MUITypography>
  );
};
