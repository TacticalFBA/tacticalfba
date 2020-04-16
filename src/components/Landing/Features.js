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
              Provide us with a logo, face photo, message body, and website URL
              and we will design a personalized product insert just for you
            </p>
          </div>
          <div className="col-md-6 px-5">
            <TrendingUpSharpIcon fontSize="large" color="primary" />
            <h6 style={{ fontWeight: "700" }}>Effective</h6>
            <p>
              Our professional product insert templates add a personal touch to
              online purchases, and are proven to increase customer satisfaction
              and review posting frequency
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 px-5">
            <AttachMoneySharpIcon fontSize="large" color="primary" />
            <h6 style={{ fontWeight: "700" }}>Inexpensive</h6>
            <p>
              At $0.05 each, product inserts are one of the most cost effective
              methods to increasing Amazon FBA performance.
            </p>
          </div>
          <div className="col-md-6 px-5">
            <LocalShippingSharpIcon fontSize="large" color="primary" />
            <h6 style={{ fontWeight: "700" }}>Free Shipping</h6>
            <p>
              Because our printing press is located in China, after we finish
              printing your order we will ship it straight to your factory for
              them to insert into each of your product packages. This should be
              a complimentary service that your factory provides.
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
