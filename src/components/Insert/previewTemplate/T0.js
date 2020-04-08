import React, { useState } from "react";
import { PreviewContainer } from "../../Styled/Containers";
import { Button, Box, Link } from "@material-ui/core";

export default function T0({ content, frontRef, backRef, handleClickOpen }) {
  let { frontImg, rearImg } = content;
  const bleed = `${process.env.PUBLIC_URL}/img/bleed.png`;
  const [show, setShow] = useState(false);
  return (
    <div className="row">
      {/* front */}
      <div className="col-12 col-md-6">
        <h6 className="mb-3">Front:</h6>
        <PreviewContainer
          className="juzhong highlight pointer"
          ref={frontRef}
          style={{
            backgroundImage: `url(${frontImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          onClick={() => handleClickOpen(frontImg, 96 / 60, "", "frontImg")}
        >
          {show && <img src={bleed} alt="bleed" className="bleed" />}
          {/* {frontImg ? (
            <img src={frontImg} alt="front" style={{ width: "100%" }} />
          ) : (
            "Upload front artwork"
          )} */}
        </PreviewContainer>
      </div>

      {/* rear */}
      <div className="col-12 col-md-6">
        <h6 className="mb-3">Rear:</h6>
        <PreviewContainer
          className="juzhong highlight pointer"
          ref={backRef}
          style={{
            backgroundImage: `url(${rearImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          onClick={() => handleClickOpen(rearImg, 96 / 60, "", "rearImg")}
        >
          {show && <img src={bleed} alt="bleed" className="bleed" />}
          {/* {rearImg ? (
            <img src={rearImg} alt="rear" style={{ width: "100%" }} />
          ) : (
            "Upload rear artwork"
          )} */}
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
