"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import LogoKakao from "assets/icons/LogoKakao.png";
import styled from "styled-components";

declare global {
  interface Window {
    Kakao: any;
  }
}
export interface Size {
  size: "small" | "medium" | "large";
}

function ShareKakao({ size }: Size) {
  const initializeKakao = (script: HTMLScriptElement) => {
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.onload = () => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    };
    document.body.appendChild(script);
  };

  const sharedKakao = () => {
    if (window.Kakao.isInitialized()) {
      window.Kakao.Share.sendCustom({
        templateId: 101197,
        templateArgs: {
          character: "크리스마스 문어",
        },
      });
    } else {
      console.error("kakao script error");
    }
  };

  useEffect(() => {
    const kakaoScript = document.createElement("script");
    initializeKakao(kakaoScript);
    return () => {
      document.body.removeChild(kakaoScript);
    };
  }, []);

  return (
    <StyledWrapper onClick={sharedKakao} size={size}>
      <Image fill src={LogoKakao} alt="카카오톡 공유" />
    </StyledWrapper>
  );
}

export default ShareKakao;

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
  background-color: #ffeb00;
  border: 0;
  cursor: pointer;
`;
