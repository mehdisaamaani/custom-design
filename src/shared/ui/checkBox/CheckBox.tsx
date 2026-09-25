import { CheckBoxIcon, CheckDisabledBoxIcon, UnCheckBoxIcon } from "@/icons";
import { Checkbox, CheckboxProps } from "@mui/material";
import { forwardRef } from "react";
import { SvgIcon } from "../svg-icon";

export const CheckBox = forwardRef(
  (
    { checked, onChange, disabled, ...props }: CheckboxProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <Checkbox
        {...props}
        disableRipple
        onChange={disabled ? undefined : onChange}
        checked={checked}
        disabled={disabled}
        ref={ref}
        icon={
          <SvgIcon fontSize="medium">
            {disabled ? <CheckDisabledBoxIcon /> : <UnCheckBoxIcon />}
          </SvgIcon>
        }
        checkedIcon={
          <SvgIcon fontSize="medium">
            {disabled ? <CheckDisabledBoxIcon /> : <CheckBoxIcon />}
          </SvgIcon>
        }
      />
    );
  },
);

CheckBox.displayName = "CheckBox";
