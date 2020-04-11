import React from "react";
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
                  insert={inserts.filter(insert => insert.iid === item.iid)[0]}
                  add={adds.filter(add => add.aid === item.aid)[0]}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                  history={history}
                />
              ))}
              {/* <Link
                to="/insert"
                className="btn mt-5 d-block text-center text-orange"
              >
                {cart.length === 0
                  ? " + Your cart is empty, let's create an insert"
                  : " + Create another insert"}
              </Link> */}
            </div>
          )
        );
      }}
    </UserConsumer>
  );
}
