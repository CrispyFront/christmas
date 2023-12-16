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
  min-width: 230px;
  gap: 20px;

  @media (max-width: 420px) {
    min-width: 160px;
  }
`;

const StyledTitle = styled.span`
  font-size: 1.4rem;
  color: #f70415;

  @media (max-width: 420px) {
    font-size: 1.1rem;
  }
`;

const StyledType = styled.p`
  font-size: 1.2rem;
  color: #689a52;

  @media (max-width: 420px) {
    font-size: 0.95rem;
  }
`;
