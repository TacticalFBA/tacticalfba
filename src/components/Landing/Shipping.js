import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default function Shipping({ history }) {
  return (
    <ShippingWrapper className="juzhong">
      <div>
        <Button
          variant="outlined"
          size="large"
          color="inherit"
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
  height: 30vh;
  background-color: #3f4354;
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
    border-bottom: 20px solid #3f4354;
  }
`;
