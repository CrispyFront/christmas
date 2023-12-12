import styled from "styled-components";

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
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 350px;
  height: 60px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  opacity: 0.8;
`;
