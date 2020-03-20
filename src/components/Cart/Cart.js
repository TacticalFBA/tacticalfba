import React from 'react'
import { UserConsumer } from "../../context";
import { FullPageContainer } from "../Styled/FullPageContainer"

import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart({ history }) {

  return (
    <FullPageContainer>
      <UserConsumer>
        {({ user, cartList, increment, decrement, removeItem, totalCart, clearCart }) => {
          if (cartList.length > 0) {
            return (
              <div className="container pt-5">
                <CartColumns />
                <CartList cart={cartList} increment={increment} decrement={decrement} removeItem={removeItem} />
                <CartTotals uid={user.uid} cart={cartList} totalCart={totalCart} clearCart={clearCart} history={history} />
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
