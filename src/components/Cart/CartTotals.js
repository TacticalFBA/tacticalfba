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
            <h5>
              <span className="text-title">subtotal: </span>
              <strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax: </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total: </span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
