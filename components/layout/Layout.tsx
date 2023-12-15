"use client";

import BackgroundImg from "assets/images/BackgroundImg.png";
import ResultBackgroundImg from "assets/images/ResultBackgroundImg.png";
import useGAPageView from "hooks/useGAPageView";
import useGetUrl from "hooks/useGetURL";
import useWindowSize from "hooks/useWindowSize";
import { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";

let vh = 0;

function Layout({ children, ...rest }: PropsWithChildren) {
  const location = useGetUrl();
  const windowSize = useWindowSize();
  let BackgroundImgSrc = BackgroundImg;

  useGAPageView();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  if (location === "/result") {
    BackgroundImgSrc = ResultBackgroundImg;
  }

  return (
    <StyledWrapper $background={BackgroundImgSrc.src}>{children}</StyledWrapper>
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
  overflow-x: hidden;
`;
