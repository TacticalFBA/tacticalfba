import React, { useState } from "react";
import { products } from "../../data";
import PreviewModal from "../PreviewModal";

export default function CartItem({
  item,
  inserts,
  adds,
  increment,
  decrement,
  removeItem,
  history
}) {
  const { pid, aid, iid, cid } = item;
  const product = products.filter(item => item.pid === pid)[0];
  const insert = inserts.filter(item => item.iid === iid)[0];
  const add = adds.filter(item => item.aid === aid)[0];
  const [show, setShow] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const handleClick = (front, back) => {
    setShow(true);
    setFront(front);
    setBack(back);
  };
  const closeModal = () => {
    setShow(false);
    setFront("");
    setBack("");
  };
  const editInsert = () => {
    history.push(`/edit-template/${pid}/${iid}`);
  };

  return (
    <React.Fragment>
      {show && (
        <div onClick={closeModal}>
          <PreviewModal front={front} back={back} />
        </div>
      )}
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <div>
            <span className="d-lg-none text-start">product: </span>
            {product.name} {product.type} -{" "}
            <span
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => handleClick(insert.frontPre, insert.backPre)}
            >
              {insert.iName}
            </span>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">Factory: </span>
          {add.factory}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price: </span>${item.price}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-black mx-1"
              onClick={() => decrement(cid)}
            >
              -
            </button>
            <span className="btn btn-black mx-1">{item.count}</span>
            <button
              className="btn btn-black mx-1"
              onClick={() => increment(cid)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong className="d-lg-none">item total : </strong>${item.total}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          {/* <button
            className="btn btn-sm text-orange font-weight-bold"
            onClick={editInsert}
          >
            Edit Insert
          </button> */}
          <button
            className="btn btn-sm text-muted font-weight-bold"
            onClick={() => removeItem(cid)}
          >
            Remove
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
