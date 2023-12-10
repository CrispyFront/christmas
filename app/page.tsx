"use client";
import SnowManTree from "assets/images/SnowManAndTree.png";
import StartButton from "assets/images/Start.png";
import TitleFrame from "assets/images/TitleFrame.png";
import JingleBell from "components/Button/JingleBell";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { RightSlideEffect } from "styles/RightSlideEffect";
import { SpringEffect } from "styles/SpringEffect";

function Home() {
  return (
    <StyledWrapper>
      <JingleBell />
      <StyledTitleFrame src={TitleFrame.src}>
        <StyledTitle>
          <StyledGreen>크리스마스</StyledGreen>에 뭐하지?
        </StyledTitle>
      </StyledTitleFrame>
      <Link href="/test">
        <motion.div initial="initial" animate="animate" variants={SpringEffect}>
          <Image
            width={170}
            height={60}
            src={StartButton.src}
            alt="스타트 버튼"
          />
        </motion.div>
      </Link>
      <StyledImageWrapper
        initial="initial"
        animate="animate"
        variants={RightSlideEffect}
      >
        <StyledSnowManTree src={SnowManTree} alt="눈사람과 트리" />
      </StyledImageWrapper>
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

const StyledSnowManTree = styled(Image)`
  position: absolute;
  width: 188px;
  height: 175px;
  bottom: 50px;
  right: 2px;
`;

const StyledImageWrapper = styled(motion.div)`
  position: absolute;
  bottom: 0;
`;
