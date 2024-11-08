import type { Meta, StoryObj } from '@storybook/react';

import StepBar from './stepsbar';

const meta = {
  component: StepBar,
  title: 'Steps bar'
} satisfies Meta<typeof StepBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        stepbar: {
            step: 1,
        }
    }
};