
import type { Meta, StoryObj } from "@storybook/react";
import AuthorContact from "./author-contact";
const meta = {
  component: AuthorContact,
  title: "Contact author Card",
} satisfies Meta<typeof AuthorContact>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    authorcontact: {
      avatarUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/cece42ed-00c6-4cd7-8ea9-df0e4aa0dce1/180",
      authorName: "ХeT_SHОТ_ОТ BABKI",
    },
  },
};
