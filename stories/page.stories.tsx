import { Meta } from "@storybook/react";
import Home from "../app/page";

export default {
  component: Home,
  title: "Pages/Home",
  decorators: [(Story) => <Story />],
} as Meta;

export const 메인페이지 = () => <Home />;