import React from 'react'

import Progress from "../Progress";
import Title from "../Styled/Title"
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart({ history, user, cart, increment, decrement, removeItem, clearCart, totalCart }) {

  return (
    <div className="container">
      <Progress page={"cart"} history={history} />
      <Title title={"Choose Quantitiy"} />
      <div>
        <CartColumns />
        <CartList cart={cart} increment={increment} decrement={decrement} removeItem={removeItem} />
        <CartTotals user={user} cart={cart} totalCart={totalCart} clearCart={clearCart} history={history} />
      </div>

    </div>
  );
}
