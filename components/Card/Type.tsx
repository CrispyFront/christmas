import Light from "@/assets/images/Light.png";
import ResultType from "@/components/Text/ResultType";
import Image from "next/image";
import styled from "styled-components";

//TODO: 데이터 map 돌기
function Type() {
  return (
    <StyledWrapper>
      <ResultType
        img="https://github.com/ChristmasTest/christmas/assets/63100352/97f11aad-849c-4a46-853b-3c9ee8a49d63"
        title="멋쟁이 루돌프"
        subTitle="누가 뭐래도 내가 짱 !"
        content="자존감도 만땅 자신감도 만땅인 당신! 다가오는 크리스마스도 즐겁게 보낼 수 있을 거 같군요. 벌써부터 크리스마스에 입을 옷을 고르고 있나요?"
      />
      <StyledImgWrapper>
        <Image src={Light} fill alt="전구" />
      </StyledImgWrapper>
    </StyledWrapper>
  );
}

export default Type;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 100px;

  @media (max-width: 420px) {
    width: 380px;
  }
`;
