import * as React from "react";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";

type DrawerMuiProps = {
  open: boolean;
  onClose: () => void;
  anchor?: "left" | "right" | "top" | "bottom";
  height?: number | string;
  width?: number | string;
  children: React.ReactNode;
};

export const DrawerMui = ({
  open,
  onClose,
  anchor = "bottom",
  height = "60vh",
  width = 320,
  children,
}: DrawerMuiProps) => {
  const isVertical = anchor === "top" || anchor === "bottom";

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      PaperProps={{
        sx: {
          borderTopLeftRadius: anchor === "bottom" ? 16 : 0,
          borderTopRightRadius: anchor === "bottom" ? 16 : 0,
          height: isVertical ? height : "100%",
          width: isVertical ? "100%" : width,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Drawer>
  );
};
