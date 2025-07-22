import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Input } from "./Input";

const meta = {
  title: "molecules/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
