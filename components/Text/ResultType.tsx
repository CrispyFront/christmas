import Image from "next/image";
import { styled } from "styled-components";

interface Props {
  title: string;
  subTitle: string;
  content: string;
  img: string;
}

function ResultType({ title, subTitle, content, img }: Props) {
  return (
    <StyledResult>
      <Image src={img} alt="타입별 사진" width={130} height={130} />
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
      <StyledContent>{content}</StyledContent>
    </StyledResult>
  );
}

export default ResultType;

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 15% 10%;
  text-align: center;
  color: #ffffff;
`;

const StyledTitle = styled.p`
  font-size: 2.5rem;
`;

const StyledSubTitle = styled.p`
  font-size: 1.25rem;
  color: #808080;
`;

const StyledContent = styled.p`
  font-size: 0.94rem;
  line-height: 1.5;
`;
