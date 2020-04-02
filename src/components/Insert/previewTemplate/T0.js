import React from "react";
import { PreviewContainer } from "../../Styled/Containers";

export default function T0({ content, onSelect, frontRef, backRef }) {
  let { frontImg, rearImg } = content;
  return (
    <div className="row">
      {/* front */}
      <div className="col-12 col-md-6">
        <h6 className="mb-3">Front:</h6>
        <PreviewContainer
          className="juzhong"
          ref={frontRef}
          style={{
            backgroundImage: `url(${frontImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
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
          className="juzhong"
          ref={backRef}
          style={{
            backgroundImage: `url(${rearImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          {/* {rearImg ? (
            <img src={rearImg} alt="rear" style={{ width: "100%" }} />
          ) : (
            "Upload rear artwork"
          )} */}
        </PreviewContainer>
      </div>
    </div>
  );
}
