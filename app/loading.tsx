"use client";
import LoadingSpinner from "assets/images/LoadingSpinner.gif";
import Image from "next/image";
import styled from "styled-components";

function Loading() {
  return (
    <StyledWrapper>
      <Image src={LoadingSpinner} alt="로딩 스피너" />
      <StyledLoadingMessage>Loading...</StyledLoadingMessage>
    </StyledWrapper>
  );
}

export default Loading;

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const StyledLoadingMessage = styled.p`
  color: #ffffff;
  font-size: 40px;
`;
