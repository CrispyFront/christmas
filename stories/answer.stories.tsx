import { Meta } from "@storybook/react";
import Answer from "components/Button/Answer";

export default {
  title: "Components/Button/Answer",
  components: Answer,
  decorators: [(Story) => <Story />],
} as Meta;

export const Red = () => <Answer color="red" />;
export const Green = () => <Answer color="green" />;
