
import type { Meta, StoryObj } from "@storybook/react";
import AuthorContact from "./author-contact";
const meta = {
  component: AuthorContact,
  title: "Author Contact Section",
} satisfies Meta<typeof AuthorContact>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    authorcontact: {
      "avatarUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/cece42ed-00c6-4cd7-8ea9-df0e4aa0dce1/180",
      "isVerified": true,
      "authorName": "ХeT_SHОТ_ОТ BABKI",
      "description": "Лучший проводник по криминальной России"
    },
  },
};

export const Unverified: Story = {
  args: {
    authorcontact: {
      "avatarUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/cece42ed-00c6-4cd7-8ea9-df0e4aa0dce1/180",
      "isVerified": false,
      "authorName": "Егорова Валентина Валентиновна",
      "description": "Я сертифицированный фитнес/йога инструктор и хореограф. Более 10 лет организую женские туры по всему миру. Cейчас живу на Байкале и приглашаю тебя посетить это волшебное место!"
    }
  }
};
