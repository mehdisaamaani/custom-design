
import { Tooltip as MuiTooltip, TooltipProps } from "@mui/material";
import { forwardRef, Ref } from "react";

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref: Ref<HTMLDivElement>) => {
  return (
    <MuiTooltip ref={ref} {...props}>
      {props.children}
    </MuiTooltip>
  );
});

Tooltip.displayName = "Tooltip";
