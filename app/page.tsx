"use client";
import SnowManTree from "assets/images/SnowManAndTree.png";
import StartButton from "assets/images/Start.png";
import TitleFrame from "assets/images/TitleFrame.png";
import JingleBell from "components/Button/JingleBell";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { SpringEffect } from "styles/motion/SpringEffect";

function Home() {
  return (
    <StyledWrapper>
      <JingleBell />
      <StyledTitleFrame src={TitleFrame.src}>
        <StyledTitle>
          <StyledGreen>크리스마스</StyledGreen>에 뭐하지?
        </StyledTitle>
      </StyledTitleFrame>
      <LazyMotion features={domAnimation}>
        <m.div initial="initial" animate="animate" variants={SpringEffect}>
          <Link href="/test">
            <Image
              width={170}
              height={60}
              src={StartButton.src}
              alt="스타트 버튼"
            />
          </Link>
        </m.div>
      </LazyMotion>
      <StyledSnowManTree src={SnowManTree} alt="눈사람과 트리" priority />
    </StyledWrapper>
  );
}

export default Home;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  
  @media (max-width: 420px) {
    gap: 40px;
  }
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
  @media (max-width: 420px) {
    font-size: 40px;
    transform: translate(-58%, -50%);
  }
`;

const StyledGreen = styled.div`
  display: inline;
  color: #468259;
`;

const StyledSnowManTree = styled(Image)`
  position: absolute;
  bottom: 40px;
  right: 2px;
`;
