"use client";

import styled from "styled-components";
import { theme } from "styles/theme";
import Image from "next/image";

interface Answer {
  color: "red" | "green";
  text: string;
}

function Answer({ color, text }: Answer) {
  const moveNext = () => {
    console.log(color);
  };

  const ButtonImg: { [State in Answer["color"]]: string } = {
    red: theme.btnColor.red,
    green: theme.btnColor.green,
  };

  return (
    <StyledWrapper onClick={moveNext}>
      <Image src={ButtonImg[color]} alt="답변 버튼" width="300" />
      <p>{text}</p>
    </StyledWrapper>
  );
}

export default Answer;

const StyledWrapper = styled.div`
  position: relative;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;
