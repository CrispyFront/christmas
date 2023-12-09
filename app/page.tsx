"use client";
import SnowAndTree from "assets/images/SnowManAndTree.png";
import StartButton from "assets/images/Start.png";
import TitleFrame from "assets/images/TitleFrame.png";
import JingleBell from "components/Button/JingleBell";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

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
        <m.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 80,
              restDelta: 0.001,
            },
          }}
        >
          <Image
            width={170}
            height={60}
            src={StartButton.src}
            alt="스타트 버튼"
          />
        </m.div>
      </Link>
      <m.div
        initial={{
          x: -200,
          y: 220,
        }}
        animate={{
          x: 200,
        }}
        transition={{ duration: 1 }}
      >
        <StyledSnowManAndTree src={SnowAndTree} alt="눈사람과 트리" />
      </m.div>
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

const StyledSnowManAndTree = styled(Image)`
  position: absolute;
  width: 188px;
  height: 175px;
  bottom: 50px;
  right: 2px;
`;
