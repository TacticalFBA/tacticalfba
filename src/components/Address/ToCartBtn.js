import React from "react";

export default function ToCartBtn({ aid, addToCart, history }) {
  const handleClick = aid => {
    const comb = JSON.parse(localStorage.getItem("comb"));
    comb.aid = aid;
    localStorage.setItem("comb", JSON.stringify(comb));
    addToCart(history);
  };

  return (
    <div>
      <button
        className="btn btn-sm text-orange font-weight-bold"
        onClick={() => handleClick(aid)}
      >
        Send to this factory
      </button>
    </div>
  );
}
