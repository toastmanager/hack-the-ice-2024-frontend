import type { Meta, StoryObj } from "@storybook/react";

import TourDescriptionInput from "./tour-description-input";

const meta = {
  component: TourDescriptionInput,
  title: "Tour Description Input",
} satisfies Meta<typeof TourDescriptionInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tourServiceInput: {
      'icon': "carbon:checkmark-filled",
        'iconstyle': "text-primary",
        'title': 'Оплаченный услуги',
        'inputPlchldr': 'Опишите что включено в стоимость',
        'count': 1,
    },
  },
};
