import type { Meta, StoryObj } from '@storybook/react';

import TourScheduleItem from './tour-schedule';

const meta = {
  component: TourScheduleItem,
  title: 'Tour Schedule'
} satisfies Meta<typeof TourScheduleItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    schedule: {
      "day": "1",
      "title": "Знакомство с беброй",
      "imageUrl": "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
      "description": "Незабdываемая поездка на озеро Байкал на монстер траках dНезабываемая поездка на озеро Байкал на монстер траках,Незабdываемая поездка на озеро Байкал на монстер траках dНезабываемая поездка на озеро Байкал на монстер траках,Незабdываемая поездка на озеро Байкал на монстер траках dНезабываемая поездка на озеро Байкал на монстер траках,Незабdываемая поездка на озеро Байкал на монстер траках dНезабываемая поездка на озеро Байкал на монстер траках,"
    }
  }
};

export const WithShortDescription: Story = {
  args: {
    schedule: {
      "day": "1",
      "title": "Знакомство с беброй",
      "imageUrl": "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
      "description": "Незабываемая ссылка"
    }
  }
};
