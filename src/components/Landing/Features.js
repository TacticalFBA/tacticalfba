import React from "react";
import styled from "styled-components";

export default function Features() {
  return (
    <FeatureWrapper className="juzhong">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <i className="fa fa-smile-o" />
            <h6>Easy</h6>
            <p>
              Provide us with a logo, face photo, message body, and website URL
              and we will design a personalized product insert just for you
            </p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-bar-chart-o"></i>
            <h6>Effective</h6>
            <p>
              Our professional product insert templates add a personal touch to
              online purchases, and are proven to increase customer satisfaction
              and review posting frequency
            </p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-dollar"></i>
            <h6>Inexpensive</h6>
            <p>
              At $0.05 each, product inserts are one of the most cost effective
              methods to increasing Amazon FBA performance.
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
  i {
    font-size: 1.5rem;
    color: var(--mainOrange);
  }
  @media (max-width: 768px) {
    i {
      margin-top: 2rem;
    }
  }
`;
