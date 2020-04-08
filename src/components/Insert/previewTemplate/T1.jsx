import React, { useState } from "react";
import styled from "styled-components";
import Parser from "html-react-parser";
import { PreviewContainer } from "../../Styled/Containers";
import { Button, Box, Link } from "@material-ui/core";

export default function T1({
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
  const frontImgWrapper = {
    backgroundImage: `url(${frontImg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const rearImgWrapper = {
    backgroundImage: `url(${rearImg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const bleed = `${process.env.PUBLIC_URL}/img/bleed.png`;
  const [show, setShow] = useState(false);
  return (
    <div className="row">
      {/* front */}
      <div className="col-12 col-md-6">
        <h6 className="mb-3">Front:</h6>
        <PreviewContainer ref={frontRef}>
          {show && <img src={bleed} alt="bleed" className="bleed" />}
          <LeftWrapper style={{ backgroundColor: themeColor }}>
            <LeftContainer>
              <div
                className="frontImg highlight pointer"
                style={frontImgWrapper}
                onClick={() =>
                  handleClickOpen(frontImg, 1, "round", "frontImg")
                }
              />
              <div
                className="pointer highlight"
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
      <div className="col-12 col-md-6">
        <h6 className="mb-3">Rear:</h6>
        <PreviewContainer
          ref={backRef}
          className="juzhong"
          style={{ backgroundColor: themeColor }}
        >
          {show && <img src={bleed} alt="bleed" className="bleed" />}
          <RearWrapper>
            <div
              className="rearImg highlight pointer"
              style={rearImgWrapper}
              onClick={() => handleClickOpen(rearImg, 1, "round", "rearImg")}
            />
            <div
              className="pointer highlight rearText"
              onClick={() => onSelect("rearMsg")}
            >
              {Parser(rearMsg)}
            </div>
          </RearWrapper>
        </PreviewContainer>
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
          onMouseDown={() => setShow(true)}
          onMouseUp={() => setShow(false)}
        >
          Hold to see guide lines
        </Button>
        <Link
          onClick={(e) => e.preventDefault()}
          style={{ marginLeft: "1rem" }}
        >
          What are the guide lines for?
        </Link>
      </Box>
    </div>
  );
}

const LeftWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  top: 0;
  padding: 10%;
  width: 30%;
  height: 100%;
  color: var(--mainWhite);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 88%;
  height: 70%;
  // border: 1px solid black;
  position: absolute;
  right: 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.45rem;
  }
  @media (max-width: 800px) {
    font-size: 0.65rem;
  }
  @media (max-width: 1200px) {
    font-size: 0.75rem;
  }
  @media (min-width: 1221px) {
    font-size: 0.8rem;
  }

  .frontImg {
    margin: 0 auto 10%;
    border-radius: 50%;
    width: 65%;
    height: 0;
    padding-bottom: 65%;
  }
`;

const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background: var(--mainWhite);
  .text-container {
    margin: 10% 10% 10% 5%;
    font-size: 13px;
  }
`;

const RearWrapper = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;

  .rearImg {
    margin: 0 auto;
    margin-bottom: 1.5rem;
    border-radius: 50%;
    width: 30%;
    height: 0;
    padding-bottom: 30%;
  }

  .rearText {
    margin-top: 1rem;
    color: var(--mainWhite);
    width: 100%;
    font-size: 0.8rem;
  }
`;
