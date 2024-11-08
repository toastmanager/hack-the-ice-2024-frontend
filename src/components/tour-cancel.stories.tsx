import type { Meta, StoryObj } from '@storybook/react';

import TourCancel from './tour-cancel';

const meta = {
  component: TourCancel,
  title: 'Tour Cancel'
} satisfies Meta<typeof TourCancel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
