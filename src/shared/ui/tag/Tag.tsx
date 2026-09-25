import React from "react";
import { Stack } from "../stack";

type TagProps = {
  bgcolor?: string;
  children?: React.ReactNode;
  style?: any;
};
export const Tag = (props: TagProps) => {
  const { children = <p>test</p>, style } = props;
  return (
    <Stack
      direction="row"
      sx={{ ...style }}
      className="bg-[#f9f9f9] border-1 border-[#cbcbcb] px-3 md:py-0 py-3 w-fit rounded-medium h-[20px]  justify-center items-center"
    >
      {children}
    </Stack>
  );
};
