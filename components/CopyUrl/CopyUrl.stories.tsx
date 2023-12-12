import type { Meta } from "@storybook/react";
import CopyUrl from "components/CopyUrl";

const meta: Meta<typeof CopyUrl> = {
  title: "components/CopyUrl",
  component: CopyUrl,
};

export default meta;

export function Default() {
  return (
    <CopyUrl url={`/test`}>
      <button>복사하기</button>
    </CopyUrl>
  );
}
