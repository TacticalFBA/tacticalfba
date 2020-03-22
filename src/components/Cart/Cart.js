import React from 'react'
import { UserConsumer } from "../../context";
import { FullPageContainer } from "../Styled/Containers"

import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart({ history }) {

  return (
    <FullPageContainer>
      <UserConsumer>
        {({ user, cart, increment, decrement, removeItem, totalCart, clearCart }) => {
          if (cart.length > 0) {
            return (
              <div className="container pt-5">
                <CartColumns />
                <CartList cart={cart} increment={increment} decrement={decrement} removeItem={removeItem} />
                <CartTotals user={user} cart={cart} totalCart={totalCart} clearCart={clearCart} history={history} />
              </div>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </UserConsumer>
    </FullPageContainer>
  );
}
