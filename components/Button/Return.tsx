"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

function Return() {
  const router = useRouter();

  return <StyledReturn onClick={() => router.push("/")}>Return</StyledReturn>;
}
export default Return;

const StyledReturn = styled.button`
  border: 1px solid #468259;
  border-radius: 15px;
  font-size: 30px;
  padding: 10px;
  color: #468259;

  &:hover {
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
`;
