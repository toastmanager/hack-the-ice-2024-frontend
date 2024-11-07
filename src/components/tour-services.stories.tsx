import type { Meta, StoryObj } from "@storybook/react";

import TourService from "./tour-services";

const meta = {
  component: TourService,
  title: "Tour services",
} satisfies Meta<typeof TourService>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      tourService: {
        'title': 'Включено в стоимость',
        'description': 'Проживание в комфортабельных отелях и гостевых домах',
        'icon': "carbon:checkmark-filled",
        'iconstyle': "text-primary"
  
      }
    }
  };

  export const NotDefault: Story = {
    args: {
      tourService: {
        'title': 'Не включено в стоимость',
        'description': 'Проживание в комфортабельных отелях и гостевых домах',
        'icon': "oui:cross-in-circle-filled",
        'iconstyle': "text-gray-400",
  
      }
    }
  };
