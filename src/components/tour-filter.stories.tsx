import type { Meta, StoryObj } from '@storybook/react';

import TourFilter from './tour-filter';

const meta = {
  component: TourFilter,
  title: 'Tour Filter'
} satisfies Meta<typeof TourFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tourfilter: {

    

    }
  }
};
