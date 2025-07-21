import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Icon } from "./Icon";

const meta = {
  title: "atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), className: "text-white" },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
