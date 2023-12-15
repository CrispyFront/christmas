import styled from "styled-components";

interface Props {
  title: string;
  character: string;
}

function CategoryByType({ title, character }: Props) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledType>{character}</StyledType>
    </StyledWrapper>
  );
}

export default CategoryByType;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 20px;
`;

const StyledTitle = styled.span`
  font-size: 1.2rem;
  color: #f70415;

  @media (max-width: 420px) {
    font-size: 1.05rem;
  }
`;

const StyledType = styled.p`
  color: #689a52;
`;
