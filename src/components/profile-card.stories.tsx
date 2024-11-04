import type { Meta, StoryObj } from '@storybook/react';
import ProfileCard from './profile-card';
const meta = {
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    ProfileCard: {
      "name": "Егорова Бебра Бебраровна",
      "tours": 22,
      "imageUrl": "https://s3-alpha-sig.figma.com/img/834c/9e0c/035c37fa4a4d3d3c35651085d0d158c7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YbEUukpkOXraCBA3v7tcwI6z8lzq1wDUyyXRzv2hwpsIYIP3qT76oq~J5rXq7yInwhn5n51wOEmEp0-N~zwh1qN4D8Hl8SMzymx7RV4uWdnWihz2bmEd-g6oeRH1LyiVpPJ7db-XDHiTGuf6G-4Y1USLhgU3AHSDFaBTXQrzdeq1KySnkzxmHZ6ZeuShRG8RfwkVzl5TN~hrVZCyKoZ34w5rlvclguMKrdvoinJq6-XN2s0fV6pJJwNy-gcBrEJ6E99DH0suseS6KAxpZPQtlgw5caNrmN8U90ySdC-d1j2m42vBwsMYEkyTZkIoVWH5lfUwAJrVUYaxFqjhjG~oyQ__",
      "published": 12,
      "score": 4.6,
      "touristcount": 206,
      "isVerified": true
    }
  }
};