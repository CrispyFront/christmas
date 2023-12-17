import LogoCopay from "assets/icons/LogoCopy.png";
import CopyUrl from "components/CopyUrl";
import ShareFacebook from "components/Share/ShareFacebook";
import ShareKakao from "components/Share/ShareKakao";
import Image from "next/image";
import styled from "styled-components";

interface ShareContent {
  url: string;
  result: { title: string; subTitle: string; content: string; img: string };
}

function ShareButtons({ url, result }: ShareContent) {
  return (
    <StyledButtonWrapper>
      <ShareKakao size="small" result={result} />
      <CopyUrl url={url}>
        <button>
          <Image src={LogoCopay} width={40} height={40} alt="링크복사" />
        </button>
      </CopyUrl>
      <ShareFacebook size="small" />
    </StyledButtonWrapper>
  );
}

export default ShareButtons;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
