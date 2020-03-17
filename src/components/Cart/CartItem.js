import React from "react";

export default function CartItem({ item, value }) {
  const { cid, type, name, price, count, total, address, content } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {name} {type} - {content.templateName}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Factory: </span>
        {address.factory}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => decrement(cid)}>
            -
          </span>
          <span className="btn btn-black mx-1"> {count} </span>
          <span className="btn btn-black mx-1" onClick={() => increment(cid)}>
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="d-lg-none">item total : </strong>${total}
      </div>
      <div
        className="col-10 mx-auto col-lg-2 my-2 my-lg-0"
      >
        <button className="btn btn-sm">Edit</button>
        <button className="btn btn-sm" onClick={() => removeItem(cid)}>Remove</button>
      </div>
    </div>
  );
}
