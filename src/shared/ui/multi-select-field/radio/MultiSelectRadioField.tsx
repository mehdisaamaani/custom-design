import {
  FormHelperText,
  ListItemText,
  Select,
  SelectProps,
} from "@mui/material";
import { forwardRef } from "react";
import { RadioBox } from "../../checkBox";
import { MenuItem } from "../../menu";
import { Stack } from "../../stack";
import { Typography } from "../../typography";

type MultiSelectRadioFieldProps = Omit<
  SelectProps,
  "label" | "value" | "onChange"
> & {
  options?: { label: string; value: string }[];
  helperText?: string;
  label?: string;
  error?: boolean;
  value?: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
};

export const MultiSelectRadioField = forwardRef(
  (
    {
      label,
      options = [],
      error,
      helperText,
      value = [],
      onChange,
      ...props
    }: MultiSelectRadioFieldProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const handleSelectAll = () => {
      const allSelected = value.length === options.length;
      if (allSelected) {
        onChange([]);
      } else {
        onChange(options.map((option) => option.value));
      }
    };

    const handleOptionToggle = (optionValue: string) => {
      if (value.includes(optionValue)) {
      } else {
        onChange([...value, optionValue]);
      }
    };

    return (
      <Stack gap={1}>
        {label && <Typography variant="sm">{label}</Typography>}
        <Select
          multiple
          size="small"
          displayEmpty
          value={value || []}
          error={!!error}
          onChange={(e) => {
            const selectedValues = e.target.value as string[];
            // Ensure that an empty string is not added to the selected values
            if (selectedValues.includes("")) {
              handleSelectAll();
            } else {
              onChange(selectedValues); // Just update selected values
            }
          }}
          ref={ref}
          renderValue={(selected) => {
            if (
              !selected ||
              (Array.isArray(selected) && selected.length === 0)
            ) {
              return "همه";
            }
            return options
              .filter((option) => (selected as string[]).includes(option.value))
              .map((option) => option.label)
              .join(", ");
          }}
          MenuProps={{ disableAutoFocusItem: true }}
          {...props}
        >
          <MenuItem value="">
            <ListItemText primary="همه" />
            <RadioBox
              checked={value.length === options.length}
              indeterminate={value.length > 0 && value.length < options.length}
              onChange={(e) => {
                e.stopPropagation();
                handleSelectAll();
              }}
            />
          </MenuItem>
          {options.map(({ label, value: optionValue }) => (
            <MenuItem key={optionValue} value={optionValue}>
              <ListItemText primary={label} />
              <RadioBox
                checked={value.includes(optionValue)}
                onChange={() => handleOptionToggle(optionValue)}
              />
            </MenuItem>
          ))}
        </Select>
        {helperText && (
          <FormHelperText error={!!error}>{helperText}</FormHelperText>
        )}
      </Stack>
    );
  },
);

MultiSelectRadioField.displayName = "MultiSelectField";
