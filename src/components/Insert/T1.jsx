import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';
import { PreviewContainer } from "../Styled/PreviewContainer";

export default function T1({ content, onSelect }) {
  let { messageBody, sellerName, facePhoto } = content.front;
  // let { backText, backImg } = content.back;
  let themeColor = {
    background: content.themeColor
  };
  return (
    <React.Fragment>

      {/* front */}
      <div className="my-4">Front</div>

      <h6 className="mb-4">Preview:</h6>

      <PreviewContainer className="mt-3">
        <LeftWrapper className="juzhong" style={themeColor}>
          <img src={facePhoto} alt="front" />
          <div className="pointer" onClick={() => onSelect("sellerName")}> {Parser(sellerName)}</div>
        </LeftWrapper>
        <RightWrapper className="pointer juzhong" onClick={() => onSelect("messageBody")}>
          {Parser(messageBody)}
        </RightWrapper>
      </PreviewContainer>

    </React.Fragment >
  );
}

const LeftWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 1.5rem;
  width: 7rem;
  height: 18rem;
  color: var(--mainWhite);
  font-size: .8rem;
  text-align: center;
  img {
    margin: 1rem 0;
    border-radius: 50%;
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1.5rem 1.75rem 1.5rem 1.2rem;
  width: 23rem;
  height: 18rem;
  background: var(--mainWhite);
  font-size: 0.85rem;
`;
