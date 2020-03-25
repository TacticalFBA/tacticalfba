import React from "react";
import { Link } from "react-router-dom"
import CartItem from "./CartItem";

export default function CartList({ cart, increment, decrement, removeItem }) {

  return (
    <div className="container-fluid">
      {cart.map(item => (
        <CartItem key={item.cid} item={item} increment={increment} decrement={decrement} removeItem={removeItem} />
      ))}
      <Link to="/insert" className="btn mt-5 d-block text-center text-orange">
        {cart.length === 0 ? " + Your cart is empty, let's make an insert" :
          " + Add another insert or factory"
        }
      </Link>
    </div>
  );
}
