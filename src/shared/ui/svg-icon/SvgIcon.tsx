import { SvgIcon as MuiSvgIcon, SvgIconProps } from "@mui/material";
import { forwardRef } from "react";

export const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiSvgIcon ref={ref} {...props}>
        {children}
      </MuiSvgIcon>
    );
  },
);

SvgIcon.displayName = "SvgIcon";
