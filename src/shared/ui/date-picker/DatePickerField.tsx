import { CalendarMonthIcon } from "@/icons";
import { TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DatePickerProps } from "react-multi-date-picker";
import { Stack } from "../stack";
import { SvgIcon } from "../svg-icon";
import { TextField } from "../text-field";
import { Typography } from "../typography";

type DatePickerFieldProps = Omit<DatePickerProps, "onChange" | "value"> & {
  label?: string;
  error?: boolean;
  helperText?: string;
  onChange: (date: DateObject | DateObject[] | null) => void;
  inputProps?: Omit<TextFieldProps, "ref">;
  value: DateObject | DateObject[] | string;
  range?: boolean;
};

export const DatePickerField = forwardRef<
  HTMLInputElement,
  DatePickerFieldProps
>(
  (
    { label, error, helperText, onChange, inputProps, range, ...props },
    ref,
  ) => {
    return (
      <Stack gap={1}>
        {label && (
          <Typography variant="sm" fontWeight="xBold">
            {label}
          </Typography>
        )}
        <DatePicker
          range={range}
          calendar={persian}
          locale={persian_fa}
          onChange={(date) => onChange(date)}
          render={(value, openCalendar) => (
            <TextField
              ref={ref}
              value={value}
              error={!!error}
              helperText={helperText}
              fullWidth
              slotProps={{
                input: {
                  endAdornment: (
                    <SvgIcon
                      component={CalendarMonthIcon}
                      sx={{ cursor: "pointer", mr: 1 }}
                      onClick={openCalendar}
                    />
                  ),
                },
              }}
              onClick={openCalendar}
              {...inputProps}
            />
          )}
          {...props}
        />
      </Stack>
    );
  },
);

DatePickerField.displayName = "DatePickerField";
