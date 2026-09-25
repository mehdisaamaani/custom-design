import { PaperProps } from "@mui/material";
import MuiPaper from "@mui/material/Paper";
import { forwardRef } from "react";

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiPaper ref={ref} {...props}>
        {children}
      </MuiPaper>
    );
  },
);

Paper.displayName = "Paper";
