"use client";
import JingleBell from "assets/images/JingleBell.png";
import SnowAndTree from "assets/images/SnowManAndTree.png";
import StartButton from "assets/images/Start.png";
import TitleFrame from "assets/images/TitleFrame.png";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

function Home() {
  return (
    <StyledWrapper>
      <StyledJingleBell src={JingleBell.src} />
      <StyledTitleFrame src={TitleFrame.src}>
        <StyledTitle>
          <StyledGreen>크리스마스</StyledGreen>에 뭐하지?
        </StyledTitle>
      </StyledTitleFrame>
      <Link href="/test">
        <Image
          width={170}
          height={60}
          src={StartButton.src}
          alt="스타트 버튼"
        />
      </Link>
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
  height: 80px;
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
  width: 295px;
  top: 50%;
  left: 50%;
  transform: translate(-52%, -50%);
  font-size: 3rem;
  font-weight: 700;
  text-align: right;
  color: #fff;
`;

const StyledGreen = styled.div`
  display: inline;
  color: #468259;
`;

const StyledSnowManAndTree = styled(Image)`
  position: absolute;
  width: 188px;
  height: 175px;
  bottom: 50px;
  right: 2px;
`;
