import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';
import { PreviewContainer } from "../Styled/PreviewContainer";

export default function T1({ content, onSelect }) {
  let { messageBody, sellerName, facePhoto } = content.front;
  let { rearMessage, companyLogo } = content.rear;
  let themeColor = {
    background: content.themeColor
  };
  return (
    <div className="row">

      {/* front */}
      <div className="col-lg-6">
        <h6 className="mb-3">Front:</h6>
        <PreviewContainer>
          <LeftWrapper className="juzhong" style={themeColor}>
            <img className="pointer highlight" src={facePhoto} alt="front" onClick={() => onSelect("img/front/facePhoto")} />
            <div className="pointer highlight" onClick={() => onSelect("text/front/sellerName")}>{Parser(sellerName)}</div>
          </LeftWrapper>
          <RightWrapper className="pointer highlight" onClick={() => onSelect("text/front/messageBody")}>{Parser(messageBody)}
          </RightWrapper>
        </PreviewContainer>
      </div>

      {/* rear */}
      <div className="col-lg-6">
        <h6 className="mb-3">Rear:</h6>
        <PreviewContainer className="juzhong" style={themeColor}>
          <RearWrapper>
            <img className="pointer highlight" src={companyLogo} alt="rear" onClick={() => onSelect("img/rear/companyLogo")} />
            <div className="pointer highlight" onClick={() => onSelect("text/rear/rearMessage")}>{Parser(rearMessage)}</div>
          </RearWrapper>
        </PreviewContainer>
      </div>

    </div>
  );
}

const LeftWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 1rem;
  width: 23%;
  height: 100%;
  color: var(--mainWhite);
  font-size: 0.8rem;
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
  width: 77%;
  height: 100%;
  background: var(--mainWhite);
  font-size: 0.75rem;
`;

const RearWrapper = styled.div`
width: 70%;
text-align: center;
img {
  width: 15%;
}
div {
  margin-top: 1rem;
  color: var(--mainWhite);
  width: 100%;
  font-size: 0.8rem;
}
`