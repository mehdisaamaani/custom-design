import { Drawer, DrawerProps } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";
import { Box } from "../box";
import { DialogHeader } from "../dialog/DialogHeader";

export type DatePickerBottomSheetProps = Omit<
  DrawerProps,
  "open" | "onOpen" | "onClose"
> & {
  title?: string;
  closeButton?: boolean;
  headerIcon?: ReactNode;
  open: boolean;
  hideTouchBar?: boolean;
  onClose: () => void;
};

export const DatePickerBottomSheet = ({
  title,
  closeButton,
  headerIcon,
  children,
  onClose,
  ModalProps,
  keepMounted,
  hideTouchBar,
  ...restProps
}: PropsWithChildren<DatePickerBottomSheetProps>) => {
  return (
    <Drawer
      anchor="bottom"
      ModalProps={{
        keepMounted: keepMounted ?? false,
        ...ModalProps,
      }}
      onClose={onClose}
      {...restProps}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: 24,
          width: 1,
          ":after": {
            content: `''`,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            height: 3,
            width: 32,
            borderRadius: 1,
            bgcolor: "grey.100",
          },
        }}
      />
      {title && (
        <DialogHeader closeButton={closeButton ? onClose : undefined}>
          {title}
        </DialogHeader>
      )}
      <Box>{children}</Box>
    </Drawer>
  );
};
