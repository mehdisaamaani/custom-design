import { Tabs as MuiTabs, TabsProps } from "@mui/material";
import { forwardRef } from "react";

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  return <MuiTabs ref={ref} {...props} />;
});

Tabs.displayName = "Tabs";
