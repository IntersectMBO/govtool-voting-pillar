import {
  TypographyVariants as BaseTypographyVariants,
  TypographyVariantsOptions as BaseTypographyVariantsOptions,
  Theme as BaseTheme,
  ThemeOptions as BaseThemeOptions,
  PaletteOptions as BasePaletteOptions,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants extends BaseTypographyVariants {
    title: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
  }

  interface TypographyVariantsOptions extends BaseTypographyVariantsOptions {
    title?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
  }

  interface PaletteOptions extends BasePaletteOptions {
    lightBlue: string;
  }

  interface Theme extends BaseTheme {
    typography: TypographyVariants;
    palette: PaletteOptions;
  }

  interface ThemeOptions extends BaseThemeOptions {
    typography?: TypographyVariantsOptions;
    palette?: PaletteOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    bodySmall: true;
    bodyMedium: true;
  }
}
