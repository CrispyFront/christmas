"use client";

import JingleBellImg from "assets/images/JingleBell.png";
import BGM from "assets/music/BGM.mp3";
import { useRef, useState } from "react";
import { css, keyframes, styled } from "styled-components";

function JingleBell() {
  const [playing, setPlaying] = useState(true);
  const bgmPlayer = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(BGM) : undefined
  );

  const toggleBGM = () => {
    setPlaying(!playing);
    playing ? bgmPlayer.current?.play() : bgmPlayer.current?.pause();

    if (playing) {
      bgmPlayer.current!.volume = 0.1;
      bgmPlayer.current!.loop = true;
    }
  };

  return (
    <StyledJingleBell
      src={JingleBellImg.src}
      onClick={toggleBGM}
      $playing={playing}
    />
  );
}

export default JingleBell;

const rotateBell = keyframes`
0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(30deg);
    }
    20% {
      transform: rotate(-30deg);
    }
    30% {
      transform: rotate(20deg);
    }
    40% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;

const StyledJingleBell = styled.div<{ src: string; $playing: boolean }>`
  position: absolute;
  top: 0;
  margin-top: 30px;
  width: 120px;
  height: 81px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  animation: ${(props) =>
    props.$playing
      ? "none"
      : css`
          ${rotateBell} 1.2s linear infinite
        `};
`;
