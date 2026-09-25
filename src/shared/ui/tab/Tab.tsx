import { Tab as MuiTab, TabProps } from "@mui/material";
import { forwardRef, Ref } from "react";

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  (props, ref: Ref<HTMLDivElement>) => {
    return <MuiTab ref={ref} {...props} />;
  },
);

Tab.displayName = "Tab";
