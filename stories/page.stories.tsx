import { Meta } from "@storybook/react";
import Home from "../app/page";
import Test from "../app/test/page";

export default {
  component: Home,
  title: "Pages",
  decorators: [(Story) => <Story />],
} as Meta;

export const MainPage = () => <Home />;
export const TestPage = () => <Test />;
