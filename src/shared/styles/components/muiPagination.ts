import { Components, paginationItemClasses, Theme } from "@mui/material";

export const MuiPagination = (theme: Theme): Components["MuiPagination"] => {
  return {
    styleOverrides: {
      root: {
        width: "100%",
        "& .MuiPagination-ul": {
          justifyContent: "center",
          flexWrap: "nowrap",
          [theme.breakpoints.down("sm")]: {
            justifyContent: "space-between",
            width: "100%",
          },
        },
        [`.${paginationItemClasses.root}`]: {
          color: theme.palette.text.primary,
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderColor: theme.palette.primary.main,
          },
        },
      },
      outlined: {
        [`.${paginationItemClasses.root}`]: {
          borderColor: theme.palette.background.tertiary,
          minWidth: theme.spacing(4),
          [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0.5),
          },
        },
      },
    },
  };
};
