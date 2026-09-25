import type { Meta, StoryObj } from "@storybook/react";
import DrawerStories from "./DrawerMenu";

const meta: Meta<typeof DrawerStories> = {
  title: "Components/DrawerMenu",
  component: DrawerStories,
};

export default meta;

type Story = StoryObj<typeof DrawerStories>;

export const Default: Story = {
  args: {
    open: true,
  },
};
