import type { Preview } from "@storybook/react";
import React from "react";
import Layout from "../components/layout/Layout";
import GlobalStyle from "../styles/GlobalStyle";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Layout>
        <Story />
      </Layout>
    </>
  ),
];

export default preview;
