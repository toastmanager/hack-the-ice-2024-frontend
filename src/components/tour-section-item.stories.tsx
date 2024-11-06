import type { Meta, StoryObj } from "@storybook/react";

import TourSectionItem from "./tour-section-item";

const meta = {
  component: TourSectionItem,
  title: "Tour Section Item",
} satisfies Meta<typeof TourSectionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
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
  },
};

export const WithShortDescription: Story = {
  args: {
    item: {
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
  },
};

export const WithOneImage: Story = {
  args: {
    item: {
      duration: "6 ночей",
      title: "Irkuts city center",
      imagesUrls: [
        "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
      ],
      description:
        "Мы будем жить в уютном гест хаусе с красивой зелёной территорией c видом на пальмовую рощу в шаговой доступности от океана. В номерах есть всё необходимое для вашего удобства: кондиционер, фен, электрический чайник, сейф, wi-fi.",
    },
  },
};
