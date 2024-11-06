import type { Meta, StoryObj } from '@storybook/react';

import ResidenceCard from './residence-card';

const meta = {
  component: ResidenceCard,
  title: 'Residence Card'
} satisfies Meta<typeof ResidenceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        residence: {
            comfortDescription:"нормик",
            motelDuration: '7 дней 6 ночи',
            hotelDuration: '4 ночи'
            

        }

      }
};


