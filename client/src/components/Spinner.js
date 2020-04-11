import React from "react";
import styled from "styled-components";
import { Spinner as SpinnerH } from "react-bootstrap";

export default function Spinner({ spin }) {
  return !spin ? null : (
    <ModalContainer>
      <SpinnerH animation="border" role="status" variant="light">
        <span className="sr-only">Loading...</span>
      </SpinnerH>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
