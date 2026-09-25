import { alpha, type Components, type Theme } from "@mui/material";

export const MuiCssBaseline = (theme: Theme): Components["MuiCssBaseline"] => {
  return {
    styleOverrides: {
      html: {
        colorScheme: theme.palette.mode,
        scrollBehavior: "smooth",
        height: "100%",
      },
      "::-webkit-horizontal, ::-webkit-scrollbar": {
        width: 6,
        padding: 0,
        backgroundColor: "transparent",
      },
      "::-webkit-scrollbar": {
        height: 4,
      },
      "::-webkit-scrollbar-thumb": {
        width: 6,
        backgroundColor: alpha(theme.palette.common.black, 0.8),
        borderRadius: 4,
        boxShadow: "inset 0 0 4px rgb(0 0 0 / 5%)",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: theme.palette.background.paper,
      },
      "input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0px 1000px white inset",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      body: {
        minHeight: "-webkit-fill-available",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      },
    },
  };
};
