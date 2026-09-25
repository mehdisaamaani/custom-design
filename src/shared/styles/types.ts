declare module "@mui/material/styles" {
  interface Theme {
    elevations: Elevations;
  }
  interface ThemeOptions {
    elevations?: Elevations;
  }
}

export type Elevations = {
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
  level6: string;
};
