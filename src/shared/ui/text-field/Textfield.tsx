import { CloseIcon } from "@/icons";
import type {
  CssBaselineProps,
  TextFieldProps as MuiTextFieldProps,
  SxProps,
} from "@mui/material";
import {
  IconButton,
  TextField as MuiTextField,
  SvgIcon,
  Typography,
} from "@mui/material";
import { forwardRef, type JSX } from "react";
import { Stack } from "../stack";
import type { HelperTextProps } from "./FormHelperText";
import { HelperTextContent } from "./FormHelperText";

export type TextFieldProps = Omit<MuiTextFieldProps, "ref"> & {
  onClearStart?: () => void;
  onClearEnd?: () => void;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      placeholder,
      label,
      helperText,
      error,
      slotProps,
      disabled,
      onClearStart,
      onClearEnd,

      ...props
    },
    ref,
  ): JSX.Element {
    const helperTextType: HelperTextProps["type"] = error ? "error" : "info";

    return (
      <Stack gap={1} textAlign="left">
        {label && (
          <Typography variant="sm" fontWeight="xBold">
            {label}
          </Typography>
        )}
        <MuiTextField
          margin="none"
          label={undefined}
          disabled={disabled}
          placeholder={placeholder}
          helperText={
            !!helperText && (
              <HelperTextContent type={helperTextType}>
                {helperText}
              </HelperTextContent>
            )
          }
          slotProps={{
            input: {
              endAdornment:
                onClearEnd && props.value ? (
                  <IconButton
                    disabled={disabled}
                    size="small"
                    onClick={onClearEnd}
                  >
                    <SvgIcon component={CloseIcon} fontSize="small" />
                  </IconButton>
                ) : null,
              startAdornment:
                onClearStart && props.value ? (
                  <IconButton
                    disabled={disabled}
                    size="small"
                    onClick={onClearStart}
                  >
                    <SvgIcon component={CloseIcon} fontSize="small" />
                  </IconButton>
                ) : null,
              ...slotProps?.input,
            },
            ...slotProps,
          }}
          error={error}
          inputRef={ref}
          size="medium"
          {...props}
        />
      </Stack>
    );
  },
);
