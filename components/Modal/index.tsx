import styled from "styled-components";

//TODO: Modal 디자인 적용
interface ModalContent {
  content: string;
}

function Modal({ content }: ModalContent) {
  return (
    <StyledWrapper>
      <StyledInWrapper>{content}</StyledInWrapper>
    </StyledWrapper>
  );
}

export default Modal;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border-radius: 4px;
  background-color: #bb1105;
`;

const StyledInWrapper = styled.div``;
