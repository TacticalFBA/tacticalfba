import React from 'react'
import { UserConsumer } from "../../context/userContext";

import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {

  return (
    <section className="pt-5">
      <UserConsumer>
        {({ cartList, increment, decrement, removeItem, totalCart }) => {
          if (cartList.length > 0) {
            return (
              <div className="container pt-5">
                <CartColumns />
                <CartList cart={cartList} increment={increment} decrement={decrement} removeItem={removeItem} />
                <CartTotals totalCart={totalCart} />
              </div>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </UserConsumer>
    </section>
  );
}
