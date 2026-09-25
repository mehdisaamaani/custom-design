declare module "@mui/material/styles" {
  interface CustomPalette {
    stroke: {
      primary: string;
      secondary: string;
      tertiary: string;
      fourth: string;
      fifth: string;
      static: string;
    };
    gradient: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }

  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }

  interface SimplePaletteColorOptions {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  }

  interface TypeText {
    static: string;
    tertiary: string;
    fourth: string;
    fifth: string;
    white: string;
  }

  interface TypeBackground {
    primary: string;
    secondary: string;
    tertiary: string;
  }
}

export {};
