import type {
  AutocompleteProps,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import {
  Autocomplete,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { forwardRef, JSX, useMemo } from "react";
import { Stack } from "../stack";

export type OptionsType = { value: string; label: string };

export interface AutoCompleteFieldProps extends Omit<
  AutocompleteProps<OptionsType, false, false, false>,
  "renderInput" | "onChange" | "value"
> {
  textFieldsProps?: Omit<MuiTextFieldProps, "ref" | "onChange">;
  label: string;
  onChange?: (data?: string) => void;
  value?: string;
  helperText?: string;
}

export const AutoCompleteField = forwardRef<
  HTMLInputElement,
  AutoCompleteFieldProps
>(function AutoCompleteField(
  { label, textFieldsProps, onChange, value, helperText, ...props },
  ref,
): JSX.Element {
  const options = [...props.options];

  const filterValue = useMemo(() => {
    if (value === undefined || value === null) {
      return null;
    }
    const found = options.find((item) => item?.value === value);
    return found || null;
  }, [value, options]);

  return (
    <Stack>
      {label && <Typography variant="sm">{label}</Typography>}
      <Autocomplete
        {...props}
        size="small"
        ref={ref}
        options={options}
        getOptionKey={(option) => option.label}
        value={filterValue || null}
        onChange={(_, newValue) => {
          onChange?.(newValue?.value);
        }}
        renderInput={(params) => (
          <TextField {...params} {...textFieldsProps} size="small" />
        )}
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </Stack>
  );
});
