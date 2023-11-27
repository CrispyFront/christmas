"use client";
import SnowAndTree from "@/assets/images/snowAndTree.png";
import Image from "next/image";
import { styled } from "styled-components";

function Home() {
  return (
    <StyledImg src={SnowAndTree} alt="눈사람과 트리" width={188} height={175} />
  );
}

export default Home;

const StyledImg = styled(Image)`
  position: absolute;
  bottom: 45px;
  right: 2px;
`;
