import type { Meta, StoryObj } from '@storybook/react';

import RouteForm from './route-form';

const meta = {
  component: RouteForm,
  title: 'Tour Forms'
} satisfies Meta<typeof RouteForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    routeform: {
        "title": 'Опишите маршрут путешествия по этапам',
        'etapi': 'Этап марщрута',
      "routesCount": 1,
      'description': 'Описание этапа',
      'titleEtapi': 'Заголовок этапа',
        'countdown': 'Количество дней'
    }
  }
};
export const LivingDefault: Story = {
    args: {
      routeform: {
        "title": 'Опишите маршрут путешествия по этапам',
        'etapi': 'Место проживания',
      "routesCount": 1,
      'description': 'Описание места проживания',
      'titleEtapi': 'Заголовок этапа',
      'countdown': 'Количество ночей'
      }
    }
  };
