"use client";
import JingleBell from "@/assets/images/jingleBell.png";
import SnowAndTree from "@/assets/images/snowManAndTree.png";
import StartButton from "@/assets/images/start.png";
import TitleFrame from "@/assets/images/titleFrame.png";
import Image from "next/image";
import { styled } from "styled-components";

function Home() {
  return (
    <StyledWrapper>
      <StyledJingleBell src={JingleBell.src} />
      <StyledTitleFrame src={TitleFrame.src}>
        <StyledTitle>
          <StyledGreen>크리마스</StyledGreen>에 뭐하지?
        </StyledTitle>
      </StyledTitleFrame>
      <StyledStartButton src={StartButton.src} />
      <StyledSnowManAndTree src={SnowAndTree} alt="눈사람과 트리" />
    </StyledWrapper>
  );
}

export default Home;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const StyledJingleBell = styled.button<{ src: string }>`
  width: 120px;
  height: 81px;
  margin-top: 50px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledTitleFrame = styled.div<{ src: string }>`
  position: relative;
  width: 100%;
  height: 269px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95% 95%;
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 700;
  text-align: right;
  color: #fff;
`;

const StyledGreen = styled.div`
  display: inline;
  color: #468259;
`;

const StyledStartButton = styled.button<{ src: string }>`
  width: 200px;
  height: 81px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledSnowManAndTree = styled(Image)`
  position: absolute;
  width: 188px;
  height: 175px;
  bottom: 50px;
  right: 2px;
`;
