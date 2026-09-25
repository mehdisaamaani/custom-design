import type { DialogProps as MuiDialogProps } from "@mui/material";
import { Dialog as MuiDialog } from "@mui/material";
import { forwardRef, ReactNode } from "react";
import { DialogHeader } from "./DialogHeader";
import { useIsMobile } from "@/hooks";

export type DialogProps =
  Omit<MuiDialogProps, "open" | "onClose" | "title" | "role"> & {
    title?: ReactNode;
    open: boolean;
    onClose: () => void;
    isTitleFixe?: boolean;
  };
export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    { children, open, title, slotProps, onClose, isTitleFixe, ...props },
    ref,
  ) => {
    const isMobile = useIsMobile();

    return (
      <MuiDialog
        open={open}
        onClose={onClose}
        slotProps={{
          ...slotProps,
          paper: {
            ...(typeof slotProps?.paper === "object" ? slotProps.paper : {}),
            sx: {
              padding: 2,
              ...(typeof slotProps?.paper === "object" && slotProps.paper?.sx
                ? slotProps.paper.sx
                : {}),
            },
          },
        }}
        ref={ref}
        {...props}
      >
        <DialogHeader
          sx={
            isTitleFixe && isMobile
              ? {
                  position: "fixed",
                  right: "0",
                  top: "0",
                  left: "0",
                  bgcolor: "white",
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: 2,
                }
              : {}
          }
          closeButton={onClose}
        >
          {title || ""}
        </DialogHeader>
        {children}
      </MuiDialog>
    );
  },
);

Dialog.displayName = "Dialog";
