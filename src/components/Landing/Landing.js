import React from "react";
import Cover from "./Cover";
import Why from "./Why";
import Fixed from "./Fixed";
import Features from "./Features";
import Shipping from "./Shipping";

export default function Landing({ history }) {
  return (
    <React.Fragment>
      <Cover />
      <Why />
      <Fixed />
      <Features />
      <Shipping history={history} />
    </React.Fragment>
  );
}
