import { MenuProps, Menu as MuiMenu } from "@mui/material";
import { forwardRef, PropsWithChildren } from "react";

export const Menu = forwardRef<HTMLDivElement, PropsWithChildren<MenuProps>>(
  ({ children, ...props }, ref) => {
    return (
      <MuiMenu {...props} ref={ref}>
        {children}
      </MuiMenu>
    );
  },
);

Menu.displayName = "Menu";
