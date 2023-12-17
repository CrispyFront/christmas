import { Meta } from "@storybook/react";
import Answer from "components/Button/Answer";

const meta: Meta<typeof Answer> = {
  title: "Components/Button/Answer",
  component: Answer,
};

export default meta;

export const Red = () => <Answer color="red" text="Default Text" onClick />;
export const Green = () => <Answer color="green" text="Default Text" onClick />;
