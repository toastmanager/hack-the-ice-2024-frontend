import type { Meta, StoryObj } from "@storybook/react";

import TourPrice from "./tourprice";

const meta = {
  component: TourPrice,
  title: "Tour price",
} satisfies Meta<typeof TourPrice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
