import type { Components } from "@mui/material";

export const MuiLink = (): Components["MuiLink"] => {
  return {
    defaultProps: {
      underline: "none",
    },
  };
};
