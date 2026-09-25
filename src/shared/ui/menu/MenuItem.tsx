import { MenuItemProps, MenuItem as MuiMenuItem } from "@mui/material";
import { forwardRef } from "react";

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiMenuItem {...props} ref={ref}>
        {children}
      </MuiMenuItem>
    );
  },
);

MenuItem.displayName = "MenuItem";
