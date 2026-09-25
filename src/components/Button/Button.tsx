import { Button } from "@/shared/ui";
import { ButtonPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import React from "react";

interface ButtonStorybookProps {
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  colorProps?: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning",
    ButtonPropsColorOverrides
  >;
}

const ButtonStorybook: React.FC<ButtonStorybookProps> = ({
  disabled,
  label,
  colorProps = "secondary",
}) => {
  return (
    <Button color={colorProps} disabled={disabled}>
      {label || "test"}
    </Button>
  );
};

export default ButtonStorybook;
