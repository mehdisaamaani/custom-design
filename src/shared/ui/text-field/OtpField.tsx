import { convertToEnglishNumbers } from "@/utils";
import { MuiOtpInput, MuiOtpInputProps } from "mui-one-time-password-input";
import { forwardRef, JSX } from "react";
import { Stack } from "../stack";
import { Typography } from "../typography";

function matchIsNumeric(text: string) {
  const value = convertToEnglishNumbers(text);
  const isNumber = typeof value === "number";
  return (isNumber || value !== "") && !isNaN(Number(value));
}

type Props = MuiOtpInputProps & {
  helperText?: string;
  length?: number;
  disabled?: boolean;
};

export const OtpField = forwardRef<HTMLInputElement, Props>(
  function TextField(props, ref): JSX.Element {
    const {
      helperText,
      TextFieldsProps,
      length = 5,
      disabled,
      ...restProps
    } = props;

    return (
      <Stack gap={1}>
        <MuiOtpInput
          autoFocus
          dir="ltr"
          length={length}
          ref={ref}
          gap={2}
          validateChar={matchIsNumeric}
          TextFieldsProps={{
            slotProps: {
              input: { sx: { p: 0, width: 40 } },
              htmlInput: { inputMode: "numeric", pattern: "[0-9]*" },
            },
            ...TextFieldsProps,
            disabled,
          }}
          {...restProps}
        />
        {!!helperText ? (
          <Typography variant="xs" color="error">
            {helperText || ""}
          </Typography>
        ) : null}
      </Stack>
    );
  },
);
