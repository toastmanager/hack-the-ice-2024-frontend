import type { Meta, StoryObj } from "@storybook/react";

import TourReview from "./tour-review";

const meta = {
  component: TourReview,
  title: "Tour Review",
} satisfies Meta<typeof TourReview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    review: {
      user: {
        id: "0",
        fullname: "Sigma Sigmovich",
        isVerified: false,
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxIB1xkZhe9X0cm2lT9PCtqjh4shl0J_gQA&s",
      },
      date: new Date(),
      text: "Not Sigmas",
      score: 3,
    },
  },
};

export const WithoutAvatar: Story = {
  args: {
    review: {
      user: {
        id: "0",
        fullname: "Наталья Дьяконова",
        isVerified: false,
        avatarUrl: undefined,
      },
      date: new Date(),
      text: "Очень понравился тур! Прекрасные экскурсоводы и природа Байкала оставили неизгладимое впечатление!",
      score: 5,
    },
  },
};