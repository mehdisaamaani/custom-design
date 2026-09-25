import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from "@mui/material";
import { forwardRef } from "react";

export const CircularProgress = forwardRef<
  HTMLDivElement,
  MuiCircularProgressProps
>(({ ...props }, ref) => {
  return <MuiCircularProgress ref={ref} color="secondary" {...props} />;
});

CircularProgress.displayName = "CircularProgress";
