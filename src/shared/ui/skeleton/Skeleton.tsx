import { Skeleton as MuiSkeleton, SkeletonProps } from "@mui/material";
import { forwardRef } from "react";

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiSkeleton animation="wave" ref={ref} {...props}>
        {children}
      </MuiSkeleton>
    );
  },
);

Skeleton.displayName = "Skeleton";
