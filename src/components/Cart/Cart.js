import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context/productContext";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section className="pt-5">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className="container pt-5">
                  <CartColumns />
                  <CartList cart={cart} value={value} />
                  <CartTotals value={value} />
                </div>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
