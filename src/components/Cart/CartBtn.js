import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../../context/productContext";

export default function CartBtn() {
  return (
    <Link to={`/cart`}>
      <CartWrapper>
        <i className="fa fa-shopping-cart text-dark"></i>
        <ProductConsumer>
          {({ cart }) => {
            return (
              <span className="badge badge-pill badge-primary">
                {cart.length}
              </span>
            );
          }}
        </ProductConsumer>
      </CartWrapper>
    </Link>
  );
}

const CartWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 2.25rem;
  height: 2rem;
  position: relative;
  .fa-shopping-cart {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1.5rem;
  }
  .badge {
    position: absolute;
    top: 0.15rem;
    right: 0;
  }
`;
