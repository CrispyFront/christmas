import Light from "@/assets/images/Light.png";
import ResultType from "@/components/Text/ResultType";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  title: string;
  subTitle: string;
  content: string;
  img: string;
}

function Type({ title, subTitle, content, img }: Props) {
  return (
    <StyledWrapper>
      <ResultType
        img={img}
        title={title}
        subTitle={subTitle}
        content={content}
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
