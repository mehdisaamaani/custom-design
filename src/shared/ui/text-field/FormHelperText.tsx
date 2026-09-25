import type { FormHelperTextProps } from "@mui/material";
import { FormHelperText } from "@mui/material";
import type { PropsWithChildren } from "react";

type IHelperTextContent = {
  type?: "simple" | "info" | "success" | "error";
};

export type HelperTextContentProps = PropsWithChildren<IHelperTextContent>;

export const HelperTextContent = ({ children }: HelperTextContentProps) => {
  return children === " " ? <>&#8203;</> : children;
};

export type HelperTextProps = FormHelperTextProps & HelperTextContentProps;

export const HelperText = ({
  children,
  type,
  ...restProps
}: HelperTextProps) => {
  return (
    <FormHelperText error={type === "error"} {...restProps}>
      <HelperTextContent type={type}>{children}</HelperTextContent>
    </FormHelperText>
  );
};
