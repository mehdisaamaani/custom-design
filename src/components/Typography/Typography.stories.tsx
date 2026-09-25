// src/stories/Typography.stories.tsx
import React from "react";
import { Typography } from "../../shared/ui/typography";

export default {
  title: "Shared/Typography",
  component: Typography,
};

export const Small = () => <Typography variant="3xl">Small Text</Typography>;

export const BaseBold = () => (
  <>
    <Typography variant="3xl" color="primary" fontWeight="xBold">
      Base xBold
    </Typography>
  </>
);
