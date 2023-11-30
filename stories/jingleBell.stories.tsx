import { Meta } from "@storybook/react";
import JingleBell from "components/Button/JingleBell";

export default {
  title: "Components/Button/JingleBell",
  component: JingleBell,
  decorators: [(Story) => <Story />],
} as Meta;

export const Default = () => <JingleBell />;
