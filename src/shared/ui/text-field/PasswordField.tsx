import { EyeIcon, EyeSlashIcon } from "@/icons";
import {
  IconButtonProps,
  TextField as MuiTextField,
  Stack,
  SvgIcon,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import { forwardRef, useReducer, useState, type JSX } from "react";
import { Typography } from "../typography";
import { HelperTextContent, HelperTextProps } from "./FormHelperText";
import { convertToEnglishNumbers } from "@/utils";
import { IconButton } from "../icon-button";

const isValidNumberInput = (value: string): boolean =>
  /^[٠-٩۰-۹0-9,]*$/.test(value);

type PasswordFieldProps<Variant extends TextFieldVariants = TextFieldVariants> =
  TextFieldProps<Variant> & {
    endIconProps?: IconButtonProps;
  };

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  function Password(
    { error, helperText, label, endIconProps, slotProps, onChange, ...props },
    ref,
  ): JSX.Element {
    const [isPasswordVisible, togglePasswordVisible] = useReducer(
      (state) => !state,
      false,
    );

    const helperTextType: HelperTextProps["type"] = error ? "error" : "info";

    const [internalValue, setInternalValue] = useState(
      props.value?.toString() || "",
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;

      if (isValidNumberInput(rawValue)) {
        const normalizedValue = convertToEnglishNumbers(rawValue);

        setInternalValue(rawValue);
        if (onChange) {
          onChange({ ...e, target: { ...e.target, value: normalizedValue } });
        }
      }
    };

    return (
      <Stack gap={1}>
        {label && (
          <Typography variant="sm" fontWeight="xBold">
            {label}
          </Typography>
        )}
        <MuiTextField
          margin="none"
          helperText={
            !!helperText && (
              <HelperTextContent type={helperTextType}>
                {helperText}
              </HelperTextContent>
            )
          }
          slotProps={{
            input: {
              type: isPasswordVisible ? "text" : "password",
              endAdornment: (
                <IconButton
                  disabled={props.disabled}
                  onClick={togglePasswordVisible}
                  {...endIconProps}
                >
                  <SvgIcon>
                    {isPasswordVisible ? <EyeIcon /> : <EyeSlashIcon />}
                  </SvgIcon>
                </IconButton>
              ),
              ...slotProps?.input,
            },
            ...slotProps,
          }}
          error={error}
          inputRef={ref}
          value={internalValue}
          onChange={handleInputChange}
          {...props}
        />
      </Stack>
    );
  },
);
