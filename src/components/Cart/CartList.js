import React from "react";
import CartItem from "./CartItem";

export default function CartList({ cart, value }) {
  return (
    <div className="container-fluid">
      {cart.map(item => (
        <CartItem key={item.pid} item={item} value={value} />
      ))}
    </div>
  );
}
