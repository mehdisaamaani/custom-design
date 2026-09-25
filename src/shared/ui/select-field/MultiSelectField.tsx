import {
  FormHelperText,
  MenuItem,
  Select,
  SelectProps,
  Typography,
} from "@mui/material";
import { forwardRef, ReactNode } from "react";
import { Stack } from "../stack";

type MultiSelectFieldProps = Omit<
  SelectProps,
  "label" | "value" | "onChange"
> & {
  options?: { label: string; value: string | number }[];
  helperText?: string;
  label?: ReactNode;
  error?: boolean;
  value?: string;
};

export const MultiSelectField = forwardRef(
  (
    {
      label,
      options = [],
      error,
      helperText,
      value = "",
      ...props
    }: MultiSelectFieldProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <Stack gap={1}>
        {label && (
          <Typography variant="sm" fontWeight="xBold">
            {label}
          </Typography>
        )}
        <Stack>
          <Select
            displayEmpty
            error={!!error}
            ref={ref}
            {...props}
            value={value}
            renderValue={(selected) => {
              if (selected === "") {
                return label;
              }
              return options
                .filter((option) =>
                  (selected as string[]).includes(option.label),
                )
                .map((option) => option.label)
                .join(", ");
            }}
          >
            {options.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText error>{helperText}</FormHelperText>}
        </Stack>
      </Stack>
    );
  },
);

MultiSelectField.displayName = "SelectField";
