"use client";

import MainIcon from "assets/icons/MainIcon.png";
import Return from "components/Button/Return";
import ShareButtons from "components/Share/ShareButtons";
import CategoryByType from "components/Text/CategoryByType";
import useGetURL from "hooks/useGetURL";
import Image from "next/image";
import { styled } from "styled-components";

function Result() {
  const url = useGetURL();

  return (
    <StyledWrapper>
      <StyledHeader>
        <p>
          <span>크리스마스</span>에 뭐하지?
        </p>
      </StyledHeader>
      <StyledResult>
        <StyledResultImg
          width={410}
          height={220}
          src={MainIcon}
          alt="메인아이콘"
        />
        <StyledTitle>멋쟁이 루돌프</StyledTitle>
        <StyledSubTitle>누가 뭐래도 내가 짱 !</StyledSubTitle>
        <StyledContent>
          자존감도 만땅 자신감도 만땅인 당신! <br />
          다가오는 크리스마스도 즐겁게 보낼 수 있을 거 같군요. 벌써부터
          크리스마스에 입을 옷을 고르고 있나요?
        </StyledContent>

        <StyledCategoryWrapper>
          <CategoryByType title="같이 보낼 유형" character="난죽택 마시멜로" />
          <CategoryByType
            title="보내면 안될 유형"
            character="조공폭발 김산타"
          />
        </StyledCategoryWrapper>
      </StyledResult>

      <StyledButtonWrapper>
        <ShareButtons url={url} />
        <StyledReturnWrapper>
          <Return title="다시하기" link="/" />
          <Return title="모든 결과 보기" link="/all" />
        </StyledReturnWrapper>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
}

export default Result;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  color: white;
  margin: 5%;

  span {
    color: #008000;
  }
`;

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20% 10%;
  text-align: center;
`;

const StyledResultImg = styled(Image)`
  @media (max-width: 420px) {
    width: 95%;
    height: auto;
  }
`;

const StyledTitle = styled.p`
  font-size: 40px;
  color: #ffffff;

  @media (max-width: 420px) {
    font-size: 1.875rem;
  }
`;

const StyledSubTitle = styled.p`
  font-size: 20px;
  color: #808080;

  @media (max-width: 420px) {
    font-size: 0.9375rem;
  }
`;

const StyledContent = styled.p`
  font-size: 1.0625rem;
  color: #ffffff;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 420px) {
    font-size: 0.875rem;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 120px;
`;

const StyledCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
`;

const StyledReturnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
