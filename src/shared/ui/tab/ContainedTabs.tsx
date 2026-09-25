import {
  Tabs as MuiTabs,
  TabsProps,
  tabClasses,
  tabsClasses,
} from "@mui/material";
import { forwardRef } from "react";

export const ContainedTabs = forwardRef<HTMLDivElement, TabsProps>(
  (props, ref) => {
    const { sx, ...prop } = props;
    return (
      <MuiTabs
        ref={ref}
        sx={{
          bgcolor: "background.tertiary",
          borderRadius: 2,
          p: 0.5,
          [`& .${tabClasses.root}`]: {
            color: "text.primary",
          },
          [`& .${tabClasses.root}.${tabClasses.selected}`]: {
            bgcolor: "primary.main",
            color: "text.white",
            borderRadius: 2,
          },
          [`& .${tabsClasses.indicator}`]: {
            bgcolor: "unset",
          },
          ...sx,
        }}
        {...prop}
      />
    );
  },
);

ContainedTabs.displayName = "Tabs";
