import React from "react";

export default function ToCartBtn({ aid, addToCart, stepForward }) {
  const handleClick = (aid) => {
    localStorage.setItem("aid", aid);
    addToCart(stepForward);
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
