import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <hr className="mt-5" />
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-sm btn-outline-danger text-uppercase px-4 my-3"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h6>
              <span>subtotal: </span>
              <span>$ {cartSubtotal}</span>
            </h6>
            <h6>
              <span>tax: </span>
              <span>$ {cartTax}</span>
            </h6>
            <h6>
              <span>total: </span>
              <span>$ {cartTotal}</span>
            </h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
