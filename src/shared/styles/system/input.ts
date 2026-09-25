export const inputSizes = {
  sm: {
    height: 32,
    paddingX: 12,
    typography: "sm",
  },
  md: {
    height: 40,
    paddingX: 14,
    typography: "base",
  },
  lg: {
    height: 48,
    paddingX: 16,
    typography: "lg",
  },
} as const;

export type InputSize = keyof typeof inputSizes;
