
import type { Meta, StoryObj } from "@storybook/react";
import TourButton from "./tour-button";
const meta = {
  component: TourButton,
  title: "form button",
} satisfies Meta<typeof TourButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    tourbutton: {
        'title': 'Впечатления',
        'description': 'Опишите основные впечатления (или места), которые ждут путешественников',
        'btnDescription': 'Добавить'
    },
  },
};

export const  ImportantInfo: Story = {
  args: {
    tourbutton: {
      'title': 'Важная информация о туре',
        'description': 'Все вопросы попадут в блок “Важно”. Отметьте нужные вопросы и заполните поле с текстом или создайте свой вариант вопроса.',
        'btnDescription': 'Добавить вопрос'
    }
  }
};
export const Review: Story = {
    args: {
      tourbutton: {
        'title': 'Отзывы о туре',
          'description': 'Если у вас есть отзывы в других сервисах, пожалуйста, напишите их тут',
          'btnDescription': 'Добавить отзыв'
      }
    }
  };
