import { convertToEnglishNumbers } from "@/utils";
import { Typography } from "@mui/material";
import type { JSX, Ref } from "react";
import { forwardRef, useState } from "react";
import { Stack } from "../stack";
import type { HelperTextProps } from "./FormHelperText";
import { HelperTextContent } from "./FormHelperText";
import { TextField, TextFieldProps } from "./Textfield";

export type NumberInputFieldProps = TextFieldProps & {
  ref?: Ref<any>;
};

const isValidNumberInput = (value: string): boolean =>
  /^[٠-٩۰-۹0-9,]*$/.test(value);

export const NumberInputField = forwardRef<
  HTMLInputElement,
  NumberInputFieldProps
>(function NumberInputField(
  { placeholder, label, helperText, error, slotProps, onChange, ...props },
  ref,
): JSX.Element {
  const [internalValue, setInternalValue] = useState<string>(
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

  const helperTextType: HelperTextProps["type"] = error ? "error" : "info";

  return (
    <Stack gap={1}>
      {label && (
        <Typography variant="sm" fontWeight="xBold">
          {label}
        </Typography>
      )}
      <TextField
        margin="none"
        label={undefined}
        placeholder={placeholder}
        helperText={
          !!helperText && (
            <HelperTextContent type={helperTextType}>
              {helperText}
            </HelperTextContent>
          )
        }
        value={internalValue}
        onChange={handleInputChange}
        slotProps={slotProps}
        error={error}
        inputRef={ref}
        {...props}
      />
    </Stack>
  );
});
