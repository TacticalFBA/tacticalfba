import React from "react";

export default function CartItem({ item, increment, decrement, removeItem }) {
  const { cid, type, name, price, count, total, templateName, factory } = item;

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {name} {type} - {templateName}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Factory: </span>
        {factory}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-black mx-1"
            onClick={() => decrement(cid)}>
            -
          </button>
          <span
            className="btn btn-black mx-1">
            {count}
          </span>
          <button
            className="btn btn-black mx-1"
            onClick={() => increment(cid)}>
            +
          </button>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="d-lg-none">item total : </strong>${total}
      </div>
      <div
        className="col-10 mx-auto col-lg-2 my-2 my-lg-0"
      >
        {/* <button className="btn btn-sm">Edit</button> */}
        <button className="btn btn-sm" onClick={() => removeItem(cid)}>Remove</button>
      </div>
    </div>
  );
}
