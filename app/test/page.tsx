"use client";
import Answer from "components/Button/Answer";
import Image from "next/image";
import { styled } from "styled-components";

function Test() {
  return (
    <StyledWrapper>
      <StyledProgressBar></StyledProgressBar>
      <StyledTest></StyledTest>
      <StyledButton>
        <Answer color="green" />
        <Answer color="red" />
      </StyledButton>
    </StyledWrapper>
  );
}

export default Test;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProgressBar = styled.div``;

const StyledTest = styled.div``;

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
