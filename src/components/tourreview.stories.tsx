import type { Meta, StoryObj } from '@storybook/react';

import TourReview from './tour-review';

const meta = {
  component: TourReview,
  title: 'Tour Review'
} satisfies Meta<typeof TourReview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        review: {
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxIB1xkZhe9X0cm2lT9PCtqjh4shl0J_gQA&s",
          "UserName": "Sigma Sigmovich",
          "date": "July 20, 2023",
          "text": "Not Sigmas",
          "score": 3
        }
      }
};

export const WithoutAvatar: Story = {
  args: {
    review: {
      "imageUrl": "",
      "UserName": "Sigma Sigmovich",
      "date": "July 20, 2023",
      "text": "Not Sigmas",
      "score": 3
    }
  }
};

