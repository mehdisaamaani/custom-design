import { badgeClasses, type Components, type Theme } from "@mui/material";

export const MuiBadge = (theme: Theme): Components["MuiBadge"] => ({
  variants: [
    {
      props: { variant: "dot" },
      style: {
        [`.${badgeClasses.anchorOriginTopRight}`]: {
          width: 10,
          height: 10,
          borderRadius: (theme.shape.borderRadius as number) * 4,
        },
      },
    },
  ],
});
