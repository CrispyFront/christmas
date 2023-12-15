"use client";
import { useSearchParams } from "next/navigation";
import Gauge from "@/components/Gauge/Gauge";
import Answer from "@/components/Button/Answer";
import MainIcon from "@/assets/icons/MainIcon.png";
import { styled } from "styled-components";
import Image from "next/image";

function Test() {
  const PageNum = Number(useSearchParams().get("page"));
  const ProgressBar = Array(6).fill("full");

  const full: number = Math.floor(PageNum / 2);
  const half: number = PageNum % 2;
  if (half === 1) {
    ProgressBar[full] = "half";
    ProgressBar.fill("empty", full + 1, 6);
  } else {
    ProgressBar.fill("empty", full, 6);
  }

  return (
    <StyledWrapper>
      <StyledProgressBar>
        {ProgressBar.map((value, index) => (
          <Gauge key={index} type={value} />
        ))}
      </StyledProgressBar>
      <StyledTest>
        <Image src={MainIcon} alt="아이콘" width="300" />
        <StyledQuestion>
          당신은... 크리스마스 날 벽난로에서 야생의 산타와 마주쳤습니다.
        </StyledQuestion>
      </StyledTest>
      <StyledButton>
        <Answer color="green" text="1번 답" />
        <Answer color="red" text="2번 답" />
      </StyledButton>
    </StyledWrapper>
  );
}

export default Test;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media (max-width: 420px) {
    width: 80%;
  }
`;

const StyledProgressBar = styled.div`
  margin-top: 8%;
`;

const StyledTest = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
  margin: 10%;
`;

const StyledQuestion = styled.p`
  color: #ffffff;

  @media (max-width: 420px) {
    font-size: 1.763rem;
  }
`;

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
