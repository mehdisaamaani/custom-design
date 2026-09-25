import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import { forwardRef } from "react";

//* regular: 400
//* medium: 500
//* bold: 700
//* xBold: 600
export type ExtendedTypographyProps = TypographyProps & {
  fontWeight?: "regular" | "medium" | "xBold" | "bold" | number;
};

export const Typography = forwardRef<HTMLSpanElement, ExtendedTypographyProps>(
  (props, ref) => {
    return <MuiTypography ref={ref} {...props} />;
  },
);

Typography.displayName = "Typography";
