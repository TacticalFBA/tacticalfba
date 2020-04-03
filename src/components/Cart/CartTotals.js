import React from "react";
import PaypalBtn from "./PaypalBtn";
import { UserConsumer } from "../../contexts/UserContext";

export default function CartTotals({ cart, cartTotal, clearCart, history }) {
  return (
    <React.Fragment>
      <div className="container">
        <hr className="mt-5" />
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <div className="mb-3">
              <h6>total: $ {cartTotal}</h6>
            </div>
            {cart.length > 0 && (
              <div>
                <UserConsumer>
                  {({ user, inserts, adds }) => (
                    <PaypalBtn
                      inserts={inserts}
                      adds={adds}
                      user={user}
                      cart={cart}
                      cartTotal={cartTotal}
                      clearCart={clearCart}
                      history={history}
                    />
                  )}
                </UserConsumer>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
