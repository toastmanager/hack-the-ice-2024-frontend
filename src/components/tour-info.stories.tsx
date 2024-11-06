import type { Meta, StoryObj } from '@storybook/react';

import TourInfo from './tour-info';

const meta = {
  component: TourInfo,
  title: 'Tour Input info'
} satisfies Meta<typeof TourInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
