import type { Meta, StoryObj } from '@storybook/react';

import JourneyInput from './journey-input';

const meta = {
  component: JourneyInput,
  title: 'Journey-start-end Input'
} satisfies Meta<typeof JourneyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};