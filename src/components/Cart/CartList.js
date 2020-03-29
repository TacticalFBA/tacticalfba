import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { UserConsumer } from "../../contexts/UserContext";

export default function CartList({
  cart,
  increment,
  decrement,
  removeItem,
  history
}) {
  return (
    <UserConsumer>
      {({ inserts, adds }) => {
        return (
          adds.length > 0 &&
          inserts.length > 0 && (
            <div className="container-fluid">
              {cart.map(item => (
                <CartItem
                  key={item.cid}
                  item={item}
                  inserts={inserts}
                  adds={adds}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                  history={history}
                />
              ))}
              <Link
                to="/insert"
                className="btn mt-5 d-block text-center text-orange"
              >
                {cart.length === 0
                  ? " + Your cart is empty, let's make an insert"
                  : " + Add another insert or factory"}
              </Link>
            </div>
          )
        );
      }}
    </UserConsumer>
  );
}
