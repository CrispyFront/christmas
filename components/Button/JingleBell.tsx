"use client";
import JingleBellImg from "assets/images/JingleBell.png";
import BGM from "assets/music/BGM.mp3";
import { useRef, useState } from "react";
import { styled } from "styled-components";

function JingleBell() {
  const [playing, setPlaying] = useState<boolean>(false);
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

  return <StyledJingleBell src={JingleBellImg.src} onClick={toggleBGM} />;
}

export default JingleBell;

const StyledJingleBell = styled.button<{ src: string }>`
  width: 120px;
  height: 81px;
  margin-top: 50px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;
