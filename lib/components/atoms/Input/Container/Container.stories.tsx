import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  title: "atoms/Input/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
