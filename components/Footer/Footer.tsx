"use client";
import EmailIcon from "assets/icons/Email.svg";
import InstagramIcon from "assets/icons/Instagram.svg";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

function Footer() {
  return (
    <StyledWrapper>
      <StyledEmail href={"/"}>
        <Image width={15} height={15} src={EmailIcon.src} alt="이메일 아이콘" />
        forchristmastest@gmail.com
      </StyledEmail>
      <StyledInstagram>
        <Image
          width={15}
          height={15}
          src={InstagramIcon.src}
          alt="인스타그램 아이콘"
        />
        christmas_test
      </StyledInstagram>
    </StyledWrapper>
  );
}

export default Footer;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 12px 10px;
  @media (max-width: 420px) {
    font-size: 13.3px;
  }
`;

const StyledEmail = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  letter-spacing: 1px;
`;

const StyledInstagram = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
