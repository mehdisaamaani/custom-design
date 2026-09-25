import { convertToEnglishNumbers } from "@/utils";
import { Typography } from "@mui/material";
import type { JSX, Ref } from "react";
import { forwardRef } from "react";
import { Stack } from "../stack";
import type { HelperTextProps } from "./FormHelperText";
import { HelperTextContent } from "./FormHelperText";
import { TextField, TextFieldProps } from "./Textfield";

export type PhoneInputFieldProps = TextFieldProps & {
  ref?: Ref<any>;
};

// Allow numbers, plus, dash, parentheses (no spaces)
const isValidNumberInput = (value: string): boolean =>
  /^[٠-٩۰-۹0-9,+\-()]*$/.test(value);

export const PhoneInputField = forwardRef<
  HTMLInputElement,
  PhoneInputFieldProps
>(function PhoneInputField(
  {
    placeholder,
    label,
    helperText,
    error,
    slotProps,
    disabled,
    onChange,
    value,
    ...props
  },
  ref,
): JSX.Element {
  const formatPhoneNumber = (value: string): string => {
    if (!value) return "";
    // Remove all spaces
    let formatted = value.toString().replace(/\s+/g, "");
    // Replace +98 prefix with 0
    formatted = formatted.replace(/^\+98/, "0");
    // Add '0' if it starts with '9' (indicating missing leading zero)
    if (formatted.startsWith("9")) {
      formatted = "0" + formatted;
    }
    // Ensure phone number is returned with the proper format
    return formatted;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    // Remove spaces from input
    const noSpacesValue = rawValue.replace(/\s+/g, "");

    if (isValidNumberInput(noSpacesValue)) {
      // Convert to English numbers
      const englishNumbers = convertToEnglishNumbers(noSpacesValue);

      // Calculate the fully formatted value (+98 -> 0) to send to the parent
      const formattedValueForParent = formatPhoneNumber(englishNumbers);

      if (onChange) {
        // Create a new event object reflecting the formatted value
        // The actual input element's value might differ momentarily if invalid chars were typed
        const newEvent = {
          ...e,
          target: {
            ...e.target, // Keep original target reference if needed elsewhere
            value: formattedValueForParent, // The value we want the parent to have (e.g., "0912...")
          },
          // You might need custom properties or methods depending on how the event is used upstream
        };
        onChange(newEvent);
      }
      // Don't update internal state; rely on parent passing updated 'value' prop
    }
    // If input is invalid, do nothing (prevents invalid characters showing temporarily)
    // The display will revert to the last valid 'value' prop from the parent.
  };

  const helperTextType: HelperTextProps["type"] = error ? "error" : "info";

  // Directly use the 'value' prop passed from the parent for display
  // Ensure it's a string, default to empty string if null/undefined
  const displayValue =
    value !== undefined && value !== null ? value.toString() : "";

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
        disabled={disabled}
        helperText={
          !!helperText && (
            <HelperTextContent type={helperTextType}>
              {helperText}
            </HelperTextContent>
          )
        }
        value={displayValue} // Directly use the prop value for display
        onChange={handleInputChange} // Handles input and calls parent's onChange
        slotProps={slotProps}
        error={error}
        inputRef={ref}
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        sx={{
          "& input::placeholder": {
            textAlign: "right",
          },
        }}
        {...props}
      />
    </Stack>
  );
});
