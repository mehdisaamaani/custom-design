import type { Meta, StoryObj } from "@storybook/react";
import { TextFields } from "./TextField";

const meta: Meta<typeof TextFields> = {
  title: "Components/TextField",
  component: TextFields,
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export default meta;

type Story = StoryObj<typeof TextFields>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: "This field is required",
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    helperText: "Invalid email address",
  },
};
