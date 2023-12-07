"use client";

import BackgroundImg from "assets/images/BackgroundImg.png";
import { motion } from "framer-motion";
import useWindowSize from "hooks/useWindowSize";
import { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";
import { pageEffect } from "styles/pageEffect";

let vh = 0;

function Layout({ children, ...rest }: PropsWithChildren) {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageEffect}
      {...rest}
    >
      <StyledWrapper $background={BackgroundImg.src}>{children}</StyledWrapper>
    </motion.div>
  );
}

export default Layout;

const StyledWrapper = styled.div<{ $background: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  max-width: 480px;
  margin: 0 auto;
  background-image: url(${(props) => props.$background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`;
