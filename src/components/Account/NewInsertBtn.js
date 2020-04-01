import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";

export default function NewInsertBtn({ history }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Button
        color="primary"
        startIcon={<AddCircleSharpIcon />}
        onClick={() => {
          history.push("/insert");
        }}
      >
        Create An Insert
      </Button>
    </div>
  );
}
