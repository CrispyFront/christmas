"use client";

import MainIcon from "@/assets/icons/MainIcon.png";
import Return from "@/components/Button/Return";
import ShareButtons from "@/components/Share/ShareButtons";
import Image from "next/image";
import useGetURL from "@/hooks/useGetURL";
import { styled } from "styled-components";

function Result() {
  const url = useGetURL();
  
  return (
    <StyledWrapper>
      <StyledHeader>
        <p>
          <span>크리스마스에</span> 뭐하지?
        </p>
      </StyledHeader>
      <StyledResult>
        <Image src={MainIcon} alt="메인아이콘" />
        <StyledTitle>멋쟁이 루돌프</StyledTitle>
        <StyledSubTitle>누가 뭐래도 내가 짱 !</StyledSubTitle>
        <StyledContent>
          자존감도 만땅 자신감도 만땅인 당신! 다가오는 크리스마스도 즐겁게 보낼
          수 있을 거 같군요. 벌써부터 크리스마스에 입을 옷을 고르고 있나요?
        </StyledContent>
      </StyledResult>

      <StyledButtonWrapper>
        <Return />
        <ShareButtons url={url} />
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
  gap: 30px;
  padding: 30% 10%;
  text-align: center;
`;

const StyledTitle = styled.p`
  font-size: 40px;
  color: #ffffff;
`;

const StyledSubTitle = styled.p`
  font-size: 20px;
  color: #808080;
`;

const StyledContent = styled.p`
  font-size: 15px;
  color: #ffffff;
  line-height: 1.5;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 145px;
  flex-flow: column;
  gap: 40px;
`;
