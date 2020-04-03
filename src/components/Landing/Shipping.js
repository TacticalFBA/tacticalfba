import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default function Shipping({ history }) {
  return (
    <ShippingWrapper className="juzhong">
      <div className="container">
        <h6>FREE shipping to your factory in China</h6>
        <p>
          Because our printing press is located in China, after we finish
          printing your order we will ship it straight to your factory for them
          to insert into each of your product packages. This should be a
          complimentary service that your factory provides.
        </p>
        <Button
          variant="contained"
          size="large"
          onClick={() => history.push("/insert")}
        >
          Get Started
        </Button>
      </div>
    </ShippingWrapper>
  );
}

const ShippingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background-color: var(--mainOrange);
  color: #fff;
  text-align: center;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid var(--mainOrange);
  }
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  i {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  h6 {
    margin-bottom: 30px;
    font-size: 1.25rem;
    &::before {
      content: "";
      display: block;
      margin: 0 auto 30px;
      background: url(img/free-shipping.png) no-repeat center center;
      width: 40px;
      height: 40px;
      background-size: cover;
    }
    &::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 50px;
      height: 40px;
      border-bottom: 4px solid #fff;
    }
  }
  p {
    display: block;
    margin: 0 auto;
    margin-bottom: 5rem;
    width: 70%;
  }
`;
