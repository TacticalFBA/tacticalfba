import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import RemoveCircleSharpIcon from "@material-ui/icons/RemoveCircleSharp";

export default function NewAddressBtn({ handleClick, show }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Button
        color="primary"
        startIcon={show ? <RemoveCircleSharpIcon /> : <AddCircleSharpIcon />}
        onClick={handleClick}
      >
        {show ? "Close" : " Add New Address"}
      </Button>
    </div>
  );
}
