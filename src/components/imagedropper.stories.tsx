import type { Meta, StoryObj } from '@storybook/react';

import TourImages from './imagedropper';

const meta = {
  component: TourImages,
  title: 'TourImages input'
} satisfies Meta<typeof TourImages>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
