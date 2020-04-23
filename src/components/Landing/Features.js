import React from "react";
import styled from "styled-components";
import EmojiEmotionsSharpIcon from "@material-ui/icons/EmojiEmotionsSharp";
import TrendingUpSharpIcon from "@material-ui/icons/TrendingUpSharp";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
import LocalShippingSharpIcon from "@material-ui/icons/LocalShippingSharp";

export default function Features() {
  return (
    <FeatureWrapper className="juzhong">
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-5">
            <EmojiEmotionsSharpIcon fontSize="large" color="primary" />
            <h6 style={{ fontWeight: "700" }}>Easy</h6>
            <p>
              Choose from one of our customizable professional templates or
              upload your own design and create your product insert in minutes.
            </p>
          </div>
          <div className="col-md-6 px-5">
            <TrendingUpSharpIcon fontSize="large" color="primary" />
            <h6 style={{ fontWeight: "700" }}>Effective</h6>
            <p>
              Proven to increase customer satisfaction and review posting
              frequency, our business card sized product inserts are
              double-sided and printed in full color on high quality card stock.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 px-5">
            <AttachMoneySharpIcon fontSize="large" color="primary" />
            <h6 style={{ fontWeight: "700" }}>Inexpensive</h6>
            <p>
              At $0.05 each, product inserts are one of the most cost effective
              methods to growing your Amazon FBA business.
            </p>
          </div>
          <div className="col-md-6 px-5">
            <LocalShippingSharpIcon fontSize="large" color="primary" />
            <h6 style={{ fontWeight: "700" }}>Free Shipping</h6>
            <p>
              Shipping fees from our Shanghai printing press to your factory is
              free. Insertion of product inserts into your product packaging is
              usually a complimentary service that your factory will provide.
            </p>
          </div>
        </div>
      </div>
    </FeatureWrapper>
  );
}

const FeatureWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  h6 {
    margin: 40px 0;
    font-size: 1.25rem;
  }
  @media (max-width: 768px) {
    i {
      margin-top: 2rem;
    }
  }
`;
