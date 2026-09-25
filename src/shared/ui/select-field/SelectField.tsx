import {
  FormHelperText,
  MenuItem,
  Select,
  SelectProps,
  Typography,
} from "@mui/material";
import { forwardRef, ReactNode } from "react";
import { Stack } from "../stack";

export type SelectFieldProps = Omit<SelectProps, "label"> & {
  options?: { label: string; value: string | number }[];
  helperText?: string;
  label?: ReactNode;
  error?: boolean;
};

export const SelectField = forwardRef(
  (
    { label, options = [], error, helperText, ...props }: SelectFieldProps,
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
          <Select displayEmpty error={!!error} ref={ref} {...props}>
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

SelectField.displayName = "SelectField";
