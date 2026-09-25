import { CheckIcon, UnCheckIcon } from "@/icons";
import { Checkbox, CheckboxProps } from "@mui/material";
import { forwardRef } from "react";
import { SvgIcon } from "../svg-icon";

type CheckBoxProps = Omit<CheckboxProps, "label"> & {
  label?: string;
  error?: boolean;
};

export const RadioBox = forwardRef(
  (
    { error, checked, label, onChange, ...props }: CheckBoxProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <Checkbox
        onChange={onChange}
        checked={checked}
        ref={ref}
        icon={
          <SvgIcon fontSize="medium">
            <UnCheckIcon />
          </SvgIcon>
        }
        checkedIcon={
          <SvgIcon fontSize="medium">
            <CheckIcon />
          </SvgIcon>
        }
        {...props}
      />
    );
  },
);

RadioBox.displayName = "RadioBox";
