import * as React from "react";
import { Radio as MuiRadio, RadioProps } from "@mui/material";

type RadioGroupKitProps = {
  checked: boolean;
} & Omit<RadioProps, "checked" | "onChange">;

export function Radio({ checked, ...rest }: RadioGroupKitProps) {
  return <MuiRadio checked={checked} {...rest} />;
}
