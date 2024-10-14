import {
  TypographyProps as MUITypographyProps,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
import * as TooltipMUI from '@mui/material/Tooltip';

export type TypographyProps = Pick<
  MUITypographyProps,
  'color' | 'lineHeight' | 'sx' | 'component'
> & {
  children?: React.ReactNode;
  fontSize?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  variant?:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'title1'
    | 'title2'
    | 'body1'
    | 'body2'
    | 'caption';
};

export type ButtonProps = Omit<MUIButtonProps, 'size'> & {
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  dataTestId?: string;
};

export type TooltipProps = Omit<TooltipMUI.TooltipProps, 'title'> & {
  heading?: string;
  paragraphOne?: string;
  paragraphTwo?: string;
};
