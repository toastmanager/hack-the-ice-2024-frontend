import type { Meta, StoryObj } from "@storybook/react";

import TourScheduleSection from "./tour-schedule-section";

const meta = {
  component: TourScheduleSection,
  title: "Tour Schedule Section",
} satisfies Meta<typeof TourScheduleSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scheduleItems: [
      {
        duration: "1 день",
        title: "Знакомство с беброй",
        imagesUrls: [
          "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
          "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
          "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
        ],
        description:
          "Незабdываемая поездка на озеро Байкал на монстер траках dНезабываемая поездка на озеро Байкал на монстер траках,Незабdываемая поездка на озеро Байкал на монстер траках dНезабываемая поездка на озеро Байкал на монстер траках,Незабdываемая поездка на озеро Байкал на монстер траках dНезабываемая поездка на озеро Байкал на монстер траках,Незабdываемая поездка на озеро Байкал на монстер траках dНезабываемая поездка на озеро Байкал на монстер траках,",
      },
      {
        duration: "2-4 день",
        title: "Листвянка и Большой Байкальский круговорот",
        imagesUrls: [
          "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
          "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
          "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
          "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
        ],
        description: "Незабываемая штука",
      },
    ],
  },
};
