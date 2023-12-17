"use client";

import { TEST_RESULT } from "@/constants/result";
import Type from "components/Card/Type";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

function All() {
  const router = useRouter();

  return (
    <StyledWrapper>
      <StyledHeader>
        <p>
          <span>크리스마스</span>에 뭐하지?
        </p>
      </StyledHeader>
      <StyledInWrapper>
        {TEST_RESULT.map((val) => (
          <Type
            img={val.img}
            title={val.title}
            subTitle={val.subTitle}
            content={val.content}
          />
        ))}
      </StyledInWrapper>
      <div>
        <StyledButton onClick={() => router.back()}>
          ⏎ 결과로 돌아가기
        </StyledButton>
      </div>
    </StyledWrapper>
  );
}

export default All;

const StyledWrapper = styled.div`
  height: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  color: white;
  margin: 5%;

  span {
    color: #008000;
  }
`;

const StyledInWrapper = styled.div`
  overflow-y: scroll;
  padding-bottom: 50px;
`;

const StyledButton = styled.button`
  font-size: 1.3rem;
  color: white;
  padding: 22px 0;

  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;
