import { Tab as MuiTab, TabProps } from "@mui/material";
import { forwardRef, Ref } from "react";

export const ContainedTab = forwardRef<HTMLDivElement, TabProps>(
  (props, ref: Ref<HTMLDivElement>) => {
    const { sx, ...prop } = props;

    return (
      <MuiTab
        sx={{
          borderBottom: "none",
          transition: "all 0.2s",
          minHeight: 40,
          padding: "0px !important",
          ...sx,
        }}
        ref={ref}
        {...prop}
      />
    );
  },
);

ContainedTab.displayName = "ContainedTab";
