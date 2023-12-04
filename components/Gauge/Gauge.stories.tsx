import type { Meta } from "@storybook/react";
import Gauge from "components/Gauge/Gauge";

const meta: Meta<typeof Gauge> = {
  title: "components/Gauge",
  component: Gauge,
};

export default meta;

export function Default() {
  return <Gauge type="empty" />;
}

export function Half() {
  return <Gauge type="half" />;
}

export function Full() {
  return <Gauge type="full" />;
}
