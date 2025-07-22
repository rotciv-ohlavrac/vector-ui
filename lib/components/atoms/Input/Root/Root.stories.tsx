import type { Meta, StoryObj } from "@storybook/react";
import { Root } from "./Root";

const meta = {
  title: "atoms/Input/Root",
  component: Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
