import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";
import '../src/app/globals.css';

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
