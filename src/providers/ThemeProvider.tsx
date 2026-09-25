"use client";

import { createCustomTheme } from "@/shared/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { useMemo } from "react";

type AppThemeProviderType = {
  children: React.ReactNode;
  themeOverride?: ThemeOptions;
  withCssBaseline?: boolean;
};

export const AppThemeProvider = ({
  children,
  themeOverride,
  withCssBaseline = true,
}: AppThemeProviderType) => {
  const theme = useMemo(
    () => createCustomTheme(themeOverride),
    [themeOverride],
  );

  return (
    <ThemeProvider theme={theme}>
      {withCssBaseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  );
};
