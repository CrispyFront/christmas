"use client";

import Type from "@/components/Card/Type";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

//TODO: 데이터 map 돌기
function All() {
  const router = useRouter();

  return (
    <StyledWrapper>
      <StyledInWrapper>
        <Type
          img="https://github.com/ChristmasTest/christmas/assets/63100352/97f11aad-849c-4a46-853b-3c9ee8a49d63"
          title="멋쟁이 루돌프"
          subTitle="누가 뭐래도 내가 짱 !"
          content="자존감도 만땅 자신감도 만땅인 당신! 다가오는 크리스마스도 즐겁게 보낼 수 있을 거 같군요. 벌써부터 크리스마스에 입을 옷을 고르고 있나요?"
        />
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
