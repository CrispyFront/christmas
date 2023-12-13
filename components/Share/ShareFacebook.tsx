import { BASE_URL } from "constants/url";
import LogoFacebook from "assets/icons/LogoFacebook.png";
import styled from "styled-components";
import Image from "next/image";
export interface Size {
  size: "small" | "medium" | "large";
}

function ShareFacebook({ size }: Size) {
  const handleClick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}`);
  };

  return (
    <>
      <StyledWrapper onClick={handleClick} size={size}>
        <Image fill src={LogoFacebook} alt="페이스북 공유" />
      </StyledWrapper>
    </>
  );
}

export default ShareFacebook;

const StyledWrapper = styled.button<Size>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  width: ${({ size }) =>
    size === "large" ? "80px" : size === "medium" ? "60px" : "40px"};
  height: ${({ size }) =>
    size === "large" ? "80px" : size === "medium" ? "60px" : "40px"};
  border-radius: 50%;
  background-color: #3b5998;
  border: 0;
  cursor: pointer;
`;
