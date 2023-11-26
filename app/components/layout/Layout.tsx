"use client";

import useWindowSize from "hooks/useWindowSize";
import { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";

let vh = 0;

function Layout({ children }: PropsWithChildren) {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  return <StyledWrapper>{children}</StyledWrapper>;
}

export default Layout;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: calc(var(--var, 1vh) * 100);
  max-width: 480px;
  margin: 0 auto;
`;