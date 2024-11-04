import type { Meta, StoryObj } from '@storybook/react';

import TourCard from './tour-card';

const meta = {
  component: TourCard,
} satisfies Meta<typeof TourCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tour: {
      "location": "Бурятия",
      "duration": "8 дней",
      "imageUrl": "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
      "inBookmark": false,
      "score": 4.6,
      "price": 54000,
      "title": "Незабываемая поездка на озеро Байкал на монстер траках"
    }
  }
};