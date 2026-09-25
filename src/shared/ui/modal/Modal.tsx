"use client";
import { PaperProps, SxProps, useMediaQuery, useTheme } from "@mui/material";
import { forwardRef, PropsWithChildren, MouseEvent } from "react";
import { BottomSheet } from "../bottom-sheet";
import { Dialog, type DialogProps } from "../dialog";
import { Theme } from "@emotion/react";

type ModalProps = {
  title?: string;
  open: boolean;
  onClose: () => void;
  DialogProps?: Pick<DialogProps, "sx" | "fullWidth" | "maxWidth">;
  PaperProps?: PaperProps;
  closeButton?: boolean;
  sx?: SxProps<Theme>;
};

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  ({ onClose, open, children, title, PaperProps, closeButton, sx }, ref) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const combinedSx: SxProps<Theme> = {
      zIndex: 3001,
      "& .MuiPaper-root": {
        outline: "none",
      },
      ...sx,
    };

    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    const wrappedChildren = <div onClick={stopPropagation}>{children}</div>;

    return isDesktop ? (
      <Dialog
        onClose={onClose}
        open={open}
        title={title}
        ref={ref}
        {...PaperProps}
        sx={combinedSx}
      >
        {wrappedChildren}
      </Dialog>
    ) : (
      <BottomSheet
        onClose={onClose}
        open={open}
        title={title}
        closeButton={closeButton}
        sx={combinedSx}
      >
        {wrappedChildren}
      </BottomSheet>
    );
  },
);

Modal.displayName = "Modal";
