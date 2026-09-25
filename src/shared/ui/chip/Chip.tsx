
import { ChipProps, Chip as MuiChip } from "@mui/material";
import { forwardRef } from "react";

export const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  return <MuiChip {...props} ref={ref} />;
});

Chip.displayName = "Chip";
