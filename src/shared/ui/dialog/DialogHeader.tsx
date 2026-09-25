import { CloseIcon } from "@/icons";
import type { DialogTitleProps } from "@mui/material";
import { DialogTitle, SvgIcon } from "@mui/material";
import { forwardRef } from "react";
import { IconButton } from "../icon-button";
import { Typography } from "../typography";

export type DialogHeaderProps = DialogTitleProps & {
  closeButton?: () => void;
};

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ closeButton, children, sx, ...props }, ref) => {
    return (
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 0,
          pt: 0,
          pb: 2,
          ...sx,
        }}
        ref={ref}
        {...props}
      >
        <Typography
          flex={1}
          textAlign="center"
          variant="sm"
          fontWeight="medium"
        >
          {children}
        </Typography>
        {closeButton && (
          <IconButton onClick={closeButton} size="small" sx={{ flexShrink: 0 }}>
            <SvgIcon fontSize="medium">
              <CloseIcon />
            </SvgIcon>
          </IconButton>
        )}
      </DialogTitle>
    );
  },
);

DialogHeader.displayName = "DialogHeader";
