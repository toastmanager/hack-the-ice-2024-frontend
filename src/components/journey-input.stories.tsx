import type { Meta, StoryObj } from '@storybook/react';

import TourStartEndInput from './journey-input';

const meta = {
  component: TourStartEndInput,
  title: 'Journey-start-end Input'
} satisfies Meta<typeof TourStartEndInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};