"use client";

import styled from "styled-components";
import { theme } from "styles/theme";
import Image from "next/image";

interface Answer {
  color: string;
}

function Answer({ color }: Answer) {
  const moveNext = () => {
    console.log(color);
  };

  return (
    <StyledWrapper onClick={moveNext}>
      <Image
        src={color === "red" ? theme.btnColor.red : theme.btnColor.green}
        alt="답변 버튼"
        width="100"
        height="36"
      />
    </StyledWrapper>
  );
}

export default Answer;

const StyledWrapper = styled.button`
  height: 36px;
`;
