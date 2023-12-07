import { Meta } from "@storybook/react";
import Home from "../app/page";

export default {
  component: Home,
  title: "app/Home",
  decorators: [(Story) => <Story />],
} as Meta;

export const home = () => <Home />;
