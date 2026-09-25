import { CloseIcon, SearchIcon } from "@/icons";
import {
  Box,
  Stack,
  SvgIcon,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { forwardRef, useEffect, useState, type JSX } from "react";
import { IconButton } from "../icon-button";

export type SearchFieldProps = Omit<TextFieldProps, "onChange"> & {
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  onClear?: () => void;
  debounce?: number;
};

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function Search(
    {
      sx,
      value: initialValue,
      slotProps,
      placeholder,
      label,
      debounce = 500,
      onClear,
      onChange,
      ...props
    },
    ref,
  ): JSX.Element {
    const shouldShowCustomPlaceholder = label && placeholder;

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
      if (value !== undefined) {
        const timeout = setTimeout(() => {
          onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
      <Box position="relative" flexGrow={1}>
        <TextField
          inputRef={ref}
          slotProps={{
            input: {
              startAdornment: (
                <SvgIcon fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              ),
              endAdornment:
                onClear && value ? (
                  <IconButton size="small" onClick={onClear}>
                    <SvgIcon component={CloseIcon} fontSize="small" />
                  </IconButton>
                ) : null,
            },
          }}
          value={value}
          sx={sx}
          onChange={(e) => setValue(e.target.value)}
          placeholder={shouldShowCustomPlaceholder ? undefined : placeholder}
          label={shouldShowCustomPlaceholder ? undefined : label}
          {...props}
        />
        {shouldShowCustomPlaceholder && !value && (
          <Stack>
            <Typography variant="body2" fontWeight="bold">
              {label}
            </Typography>

            <Typography variant="body2" fontWeight="medium" color="text.fourth">
              {placeholder}
            </Typography>
          </Stack>
        )}
      </Box>
    );
  },
);
