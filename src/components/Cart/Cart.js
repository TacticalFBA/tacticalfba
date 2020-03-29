import React from "react";
import { CartConsumer } from "../../contexts/CartContext";

import Progress from "../Progress";
import Title from "../Styled/Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart({ history }) {
  return (
    <div className="container">
      <Progress page={"cart"} history={history} />
      <Title title={"Choose Quantitiy"} />
      <CartConsumer>
        {({
          cart,
          cartSubtotal,
          cartTax,
          cartTotal,
          increment,
          decrement,
          removeItem,
          clearCart
        }) => {
          return (
            <div>
              <CartColumns />
              <CartList
                cart={cart}
                increment={increment}
                decrement={decrement}
                removeItem={removeItem}
                history={history}
              />
              <CartTotals
                cart={cart}
                cartSubtotal={cartSubtotal}
                cartTax={cartTax}
                cartTotal={cartTotal}
                clearCart={clearCart}
                history={history}
              />
            </div>
          );
        }}
      </CartConsumer>
    </div>
  );
}
