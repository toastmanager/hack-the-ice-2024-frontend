import type { Meta, StoryObj } from '@storybook/react';

import TourFeatures from './tour-features';

const meta = {
  component: TourFeatures,
  title: 'Tour Features'
} satisfies Meta<typeof TourFeatures>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tourfeat: {
      "scoreActivity": 1,
      "scoreComfort": 4,
      "gapGroup": 12,
      "tourDuration": 12,
      "languageSupport": "Русский, Английский"
    

    }
  }
};
