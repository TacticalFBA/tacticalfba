import React from "react";
import styled from "styled-components";

export default function Fixed() {
  return <FixedWrapper></FixedWrapper>;
}

const FixedWrapper = styled.div`
  background: url(/img/fixed.jpg) no-repeat center center fixed;
  width: 100%;
  height: 50vh;
  background-size: cover;
`;
