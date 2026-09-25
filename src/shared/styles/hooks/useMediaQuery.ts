import type { Components, Theme } from "@mui/material";
import mediaQuery from "css-mediaquery";

const getBreakpoint = (theme: Theme, device?: string) => {
  if (device === "mobile") {
    return theme.breakpoints.values.sm;
  }

  return theme.breakpoints.values.lg;
};

export const createUseMediaQuery = (theme: Theme, device?: string): Components["MuiUseMediaQuery"] => {
  return {
    defaultProps: {
      ssrMatchMedia: (query) => {
        const isServer = typeof window === "undefined";
        return {
          matches:
            isServer && !device
              ? false
              : mediaQuery.match(query, {
                  width: isServer ? getBreakpoint(theme, device) : window.innerWidth,
                }),
        };
      },
    },
  };
};
