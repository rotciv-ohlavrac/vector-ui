import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Button } from "./Button";

const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: { onClick: fn(), children: "Click Me" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
