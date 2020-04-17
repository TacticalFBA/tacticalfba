import React, { useState } from "react";
import styled from "styled-components";
import Parser from "html-react-parser";
import { PreviewContainer } from "../../Styled/Containers";
import { Button, Box } from "@material-ui/core";
import WhyGuideLineBtn from "./WhyGuideLineBtn.js/index.js";

export default function T2({
  content,
  onSelect,
  frontRef,
  backRef,
  handleClickOpen,
}) {
  let {
    themeColor,
    frontMsgBody,
    frontMsgSec,
    rearMsg,
    frontImg,
    rearImg,
  } = content;
  const imgWrapper = {
    backgroundImage: `url(${frontImg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const bleed = `${process.env.PUBLIC_URL}/img/bleed.png`;
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <div className="row">
        {/* front */}
        <div className="col-12 col-lg-6">
          <h6 className="mb-3">Front:</h6>
          <PreviewContainer ref={frontRef}>
            {show && <img src={bleed} alt="bleed" className="bleed" />}
            <LeftWrapper style={{ backgroundColor: themeColor }}>
              <LeftContainer>
                <div
                  className="frontImg highlight pointer"
                  style={imgWrapper}
                  onClick={() =>
                    handleClickOpen(frontImg, 1, "round", "frontImg")
                  }
                />
                <div
                  className="pointer highlight text"
                  onClick={() => onSelect("frontMsgSec")}
                >
                  {Parser(frontMsgSec)}
                </div>
              </LeftContainer>
            </LeftWrapper>
            <RightWrapper
              className="pointer highlight"
              onClick={() => onSelect("frontMsgBody")}
            >
              <div className="text-container">{Parser(frontMsgBody)}</div>
            </RightWrapper>
          </PreviewContainer>
        </div>

        {/* rear */}
        <div className="col-12 col-lg-6">
          <h6 className="mb-3">Rear:</h6>
          <PreviewContainer className="juzhong" ref={backRef}>
            {show && <img src={bleed} alt="bleed" className="bleed" />}
            <RearWrapper>
              <div
                className="left highlight pointer"
                style={{
                  backgroundImage: `url(${rearImg})`,
                  backgroundPosition: "center center",
                  backgroudRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                onClick={() => handleClickOpen(rearImg, 1, "", "rearImg")}
              >
                {/* <img src={rearImg} alt="rear" /> */}
              </div>
              <div className="right">
                <div
                  className="text-container pointer highlight"
                  onClick={() => onSelect("rearMsg")}
                >
                  {Parser(rearMsg)}
                </div>
              </div>
            </RearWrapper>
          </PreviewContainer>
        </div>
      </div>

      <Box
        mt={3}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
      >
        <Button
          variant="contained"
          size="small"
          color="primary"
          onMouseDown={() => setShow(true)}
          onMouseUp={() => setShow(false)}
        >
          Hold to see guide lines
        </Button>
        <WhyGuideLineBtn />
      </Box>
    </React.Fragment>
  );
}

const LeftWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 30%;
  height: 100%;
  color: var(--mainWhite);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LeftContainer = styled.div`
  width: 88%;
  height: 80%;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-align: center;
  color: var(--mainWhite) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  }

  .frontImg {
    border-radius: 50%;
    width: 65%;
    height: 0;
    padding-bottom: 65%;
  }

  .text {
    margin-top: 1rem;
    color: var(--mainWhite) !important;
    overflow: hidden;
    font-size: 12px;
    width: 90%;
    max-height: 60%;
  }
`;

const RightWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: var(--mainWhite);
  .text-container {
    position: absolute;
    top: 51%;
    left: 48%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 85%;
    overflow: hidden;
    font-size: 13px;
  }
`;

const RearWrapper = styled.div`
  .left {
    position: absolute;
    left: 0;
    top: 0;
    width: 60%;
    height: 100%;
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background: var(--mainWhite);
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text-container {
      position: absolute;
      left: 1rem;
      width: 72%;
      max-height: 80%;
      overflow: hidden;
      font-size: 13px;
    }
  }
`;
