import type { Meta } from "@storybook/react";
import ShareFacebook from "components/Share/ShareFacebook";

const meta: Meta<typeof ShareFacebook> = {
  title: "components/ShareFacebook",
  component: ShareFacebook,
};

export default meta;

export function Default() {
  return <ShareFacebook />;
}
