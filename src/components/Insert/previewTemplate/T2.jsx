import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';
import { PreviewContainer } from "../../Styled/Containers";

export default function T2({ content, onSelect }) {
  let { themeColor, frontMsgBody, frontMsgSec, rearMsg, frontImg, rearImg } = content;
  const imgWrapper = {
    backgroundImage: `url(${frontImg})`,
    backgroundPosition: "center center",
    backgroudRepeat: "no-repeat",
    backgroundSize: "cover"
  }
  return (
    <div className="row">

      {/* front */}
      <div className="col-12 col-md-6">
        <h6 className="mb-3">Front:</h6>
        <PreviewContainer>
          <LeftWrapper className="juzhong" style={{ backgroundColor: themeColor }}>
            <div className="frontImg" style={imgWrapper} />
            <div className="pointer highlight" onClick={() => onSelect("frontMsgSec")}>{Parser(frontMsgSec)}</div>
          </LeftWrapper>
          <RightWrapper className="pointer highlight" onClick={() => onSelect("frontMsgBody")}>{Parser(frontMsgBody)}
          </RightWrapper>
        </PreviewContainer>
      </div>

      {/* rear */}
      <div className="col-12 col-md-6">
        <h6 className="mb-3">Rear:</h6>
        <PreviewContainer className="juzhong" >
          <RearWrapper>
            <div className="left" style={{
              backgroundImage: `url(${rearImg})`,
              backgroundPosition: "center center",
              backgroudRepeat: "no-repeat",
              backgroundSize: "cover"
            }}>
              {/* <img src={rearImg} alt="rear" /> */}
            </div>
            <div className="right pointer highlight" onClick={() => onSelect("rearMsg")}>{Parser(rearMsg)}</div>
          </RearWrapper>
        </PreviewContainer>
      </div>

    </div >
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
  .frontImg {
    margin: 1rem 0;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
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
.left {
  position: absolute;
  left:0;
  top:0;
  width: 55%;
  height: 100%;
}
.right {
  position: absolute;
  right:0;
  top:0;
  width: 45%;
  height: 100%;
  font-size: 0.8rem;
  padding: 1.5rem 1.75rem 1.5rem 1.2rem;
}
`