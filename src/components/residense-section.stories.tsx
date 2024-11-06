import type { Meta, StoryObj } from "@storybook/react";

import ResidenceSection from "./residence-section";

const meta = {
  component: ResidenceSection,
  title: "Residence Section",
} satisfies Meta<typeof ResidenceSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    residence: {
      comfort: 4,
      motelDuration: "7 дней 6 ночи",
      hotelDuration: "4 ночи",
      items: [
        {
          duration: "6 ночей",
          title: "Irkutsk city center",
          imagesUrls: [
            "https://broni.travel/public/sites/pages/5784/380139.jpeg",
          ],
          description:
            "Мы будем жить в уютном гест хаусе с красивой зелёной территорией c видом на пальмовую рощу в шаговой доступности от океана. В номерах есть всё необходимое для вашего удобства: кондиционер, фен, электрический чайник, сейф, wi-fi.",
        },
      ],
    },
  },
};
