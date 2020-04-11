import React from "react";
import styled from "styled-components";

export default function PreviewModal({ front, back }) {
  return (
    <ModalContainer>
      <img src={front} alt="front preview" />
      <img src={back} alt="back preview" />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  img {
    width: 30rem;
    margin: 0.5rem;
  }
`;
