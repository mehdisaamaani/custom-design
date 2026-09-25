import { SwipeableDrawer, SwipeableDrawerProps, SxProps } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";
import { Box } from "../box";
import { DialogHeader } from "../dialog/DialogHeader";
import { Theme } from "@emotion/react";

export type BottomSheetProps = Omit<
  SwipeableDrawerProps,
  "open" | "onOpen" | "onClose"
> & {
  title?: string;
  closeButton?: boolean;
  headerIcon?: ReactNode;
  open: boolean;
  hideTouchBar?: boolean;
  onOpen?: SwipeableDrawerProps["onOpen"];
  onClose: () => void;
  sx?: SxProps<Theme>;
};

export const BottomSheet = ({
  title,
  closeButton,
  headerIcon,
  children,
  onOpen,
  onClose,
  ModalProps,
  keepMounted,
  hideTouchBar,
  sx,
  ...restProps
}: PropsWithChildren<BottomSheetProps>) => {
  const onHandleOpen = () => {
    onOpen;
  };

  return (
    <SwipeableDrawer
      disableSwipeToOpen
      anchor="bottom"
      ModalProps={{
        keepMounted: keepMounted ?? false,
        ...ModalProps,
      }}
      onClose={onClose}
      onOpen={onOpen || onHandleOpen}
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
    </SwipeableDrawer>
  );
};
