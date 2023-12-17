"use client";
import Return from "@/components/Button/Return";
import NotFoundImg from "assets/images/404_Img.png";
import Image from "next/image";
import { styled } from "styled-components";

function NotFoundPage() {
  return (
    <StyledWrapper>
      <StyledHeader>
        <p>
          <span>크리스마스</span>에 뭐하지?
        </p>
      </StyledHeader>
      <Image width={300} height={300} src={NotFoundImg} alt="404 이미지" />
      <StyledContent>허허 젊은이.. 여기는 들어오면 안된다네</StyledContent>
      <Return title="홈으로" link="/" />
    </StyledWrapper>
  );
}

export default NotFoundPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const StyledContent = styled.p`
  color: #fff;
`;

const StyledHeader = styled.div`
  color: white;
  margin: 5%;

  span {
    color: #008000;
  }
`;
