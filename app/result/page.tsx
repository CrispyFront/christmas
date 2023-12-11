"use client";
import { styled } from "styled-components";
import MainIcon from "@/assets/icons/MainIcon.png";
import Image from "next/image";

function Result() {
  return (
    <StyledWrapper>
      <StyledHeader>
        <p>
          <span>크리스마스에</span> 뭐하지?
        </p>
      </StyledHeader>
      <StyledResult>
        <Image src={MainIcon} alt="메인아이콘" />
        <p className="title">멋쟁이 루돌프</p>
        <p className="subtitle">누가 뭐래도 내가 짱 !</p>
        <p className="content">
          자존감도 만땅 자신감도 만땅인 당신! 다가오는 크리스마스도 즐겁게 보낼
          수 있을 거 같군요. 벌써부터 크리스마스에 입을 옷을 고르고 있나요?
        </p>
      </StyledResult>
      <button>다시하기</button>
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
    color: green;
  }
`;

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30% 10%;

  text-align: center;

  .title {
    font-size: 40px;
    color: white;
  }

  .subtitle {
    font-size: 20px;
    color: gray;
  }

  .content {
    font-size: 15px;
    color: white;
    line-height: 1.5;
  }
`;
