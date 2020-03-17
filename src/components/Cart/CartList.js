import React from "react";
import { Link } from "react-router-dom"
import CartItem from "./CartItem";

export default function CartList({ cart, value }) {
  return (
    <div className="container-fluid">
      {cart.map(item => (
        <CartItem key={item.cid} item={item} value={value} />

      ))}
      <Link to="/new-card" className="mt-5 d-block text-center"> + Add another insert or factory</Link>
    </div>
  );
}
