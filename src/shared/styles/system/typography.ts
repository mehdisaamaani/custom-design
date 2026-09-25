import { TypographyVariantsOptions } from "@mui/material";
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  export interface TypographyVariants {
    xxs: CSSProperties;
    xs: CSSProperties;
    sm: CSSProperties;
    base: CSSProperties;
    lg: CSSProperties;
    xl: CSSProperties;
    "2xl": CSSProperties;
    "3xl": CSSProperties;
    "4xl": CSSProperties;
    "5xl": CSSProperties;
    xBold: CSSProperties["fontWeight"];
  }

  export interface TypographyVariantsOptions {
    xxs?: CSSProperties;
    xs?: CSSProperties;
    sm?: CSSProperties;
    base?: CSSProperties;
    lg?: CSSProperties;
    xl?: CSSProperties;
    "2xl"?: CSSProperties;
    "3xl"?: CSSProperties;
    "4xl"?: CSSProperties;
    "5xl"?: CSSProperties;
    xBold: CSSProperties["fontWeight"];
  }

  export interface FontStyle {
    xBold: CSSProperties["fontWeight"];
  }
}

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    xxs: true;
    xs: true;
    sm: true;
    base: true;
    lg: true;
    xl: true;
    "2xl": true;
    "3xl": true;
    "4xl": true;
    "5xl": true;
  }
}

export const createTypographyOptions = (): TypographyVariantsOptions =>
  ({
    fontFamily: "var(--font-Pelak)",
    xxs: {
      lineHeight: "0.938rem",
      fontSize: "0.625rem",
    },
    xs: {
      lineHeight: "1.2rem",
      fontSize: "0.75rem",
    },
    sm: {
      lineHeight: "1.313rem",
      fontSize: "0.875rem",
    },
    base: {
      lineHeight: "1.5rem",
      fontSize: "1rem",
    },
    lg: {
      lineHeight: "1.688rem",
      fontSize: "1.125rem",
    },
    xl: {
      lineHeight: "1.875rem",
      fontSize: "1.25rem",
    },
    "2xl": {
      lineHeight: "2.25rem",
      fontSize: "1.5rem",
    },
    "3xl": {
      lineHeight: "2.813rem",
      fontSize: "1.875rem",
    },
    "4xl": {
      lineHeight: "3.375rem",
      fontSize: "2.25rem",
    },
    "5xl": {
      lineHeight: "4.5rem",
      fontSize: "3rem",
    },
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightBold: "700",
    xBold: "600",
  }) as TypographyVariantsOptions & { xBold: string };
