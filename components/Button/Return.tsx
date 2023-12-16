"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
}

function Return({ title, link }: Props) {
  const router = useRouter();

  return (
    <StyledReturn onClick={() => router.push(`${link}`)}>{title}</StyledReturn>
  );
}

export default Return;

const StyledReturn = styled.button`
  border: 2px solid #468259;
  border-radius: 15px;
  font-size: 1.25rem;
  width: 200px;
  height: 55px;
  padding: 10px;
  color: #468259;
  background-color: #ffffff;

  @media (max-width: 420px) {
    font-size: 1.12rem;
    width: 150px;
  }

  &:hover {
    font-size: 1.3rem;
    transition: all 0.2s ease-in-out;
  }
`;
