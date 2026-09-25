import type { Meta, StoryObj } from "@storybook/react";
import ButtonStorybook from "./Button";
const meta: Meta<typeof ButtonStorybook> = {
  title: "Components/Button",
  component: ButtonStorybook,
  tags: ["autodocs"],
  args: {
    disabled: true,
    label: "Disabled Button",
  },
};

export default meta;

type Story = StoryObj<typeof ButtonStorybook>;

export const Default: Story = {
  args: {
    disabled: false,
    color: "secondary",
    label: "default",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
