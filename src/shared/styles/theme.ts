import {
  createTheme as createMuiTheme,
  ThemeOptions,
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { getComponentOverrides } from "./componentOverrides";
import { baseThemeOptions } from "./system/baseThemeOptions";

export const createCustomTheme = (overrides?: ThemeOptions) => {
  const mergedOptions = deepmerge(baseThemeOptions, overrides ?? {});

  let theme = createMuiTheme(mergedOptions);
  const libraryComponentOverrides = getComponentOverrides(theme);

   theme = createMuiTheme(theme, {
    components: deepmerge(libraryComponentOverrides, overrides?.components ?? {}),
  });

  return theme;
};
