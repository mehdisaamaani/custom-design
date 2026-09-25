import MuiSwipeableDrawer, {
  SwipeableDrawerProps,
} from "@mui/material/SwipeableDrawer";
import { forwardRef, PropsWithChildren } from "react";

type SwappableDrawerProps = {
  title?: string;
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  DialogProps?: Omit<SwipeableDrawerProps, "open" | "onClose">;
};

export const SwappableDrawer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<SwappableDrawerProps>
>(({ onClose, onOpen, open, children, title, DialogProps }, ref) => {
  return (
    <MuiSwipeableDrawer
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      title={title}
      ref={ref}
      {...DialogProps}
    >
      {children}
    </MuiSwipeableDrawer>
  );
});

SwappableDrawer.displayName = "SwappableDrawer";
