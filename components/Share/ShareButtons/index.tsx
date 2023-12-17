import LogoCopay from "assets/icons/LogoCopy.png";
import CopyUrl from "components/CopyUrl";
import ShareFacebook from "components/Share/ShareFacebook";
import ShareKakao from "components/Share/ShareKakao";
import Image from "next/image";
import styled from "styled-components";

interface ShareContent {
  url: string;
}

function ShareButtons({ url }: ShareContent) {
  return (
    <StyledButtonWrapper>
      <CopyUrl url={url}>
        <button>
          <Image src={LogoCopay} width={40} height={40} alt="링크복사" />
        </button>
      </CopyUrl>
      <ShareFacebook size="small" />
      <ShareKakao size="small" />
    </StyledButtonWrapper>
  );
}

export default ShareButtons;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
