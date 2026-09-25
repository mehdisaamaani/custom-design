import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import React from "react";

export type TextFieldProps = Omit<MuiTextFieldProps, "ref"> & {
  helperText?: string;
  CloseIcon?: any;
  onClearEnd?: () => void;
  onClearStart?: () => void;
};
