import type { Meta, StoryObj } from '@storybook/react';

import TourPreview from './tour-previews';

const meta = {
  component: TourPreview,
  title: 'Tour Preview'
} satisfies Meta<typeof TourPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tourpreview: {
          "price": 1488,
          "howLongDays": 7,
          "howLongNights": 6,
          "memberCount": 1,
          "date": "11 бебрабря - 16 сигмабрь"
        }
      }
};
export const WithDiscount: Story = {
    args: {
        tourpreview: {
            "price": 1488,
            "howLongDays": 7,
            "howLongNights": 6,
            "memberCount": 1,
            "previousPrice": 54000,
            "discount": 20,
            "date": "11 бебрабря - 16 сигмабрь"
           
          }
    }
  };
