import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";

export default function NewInsertBtn({ history, content, toStepOne }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Button
        color="primary"
        startIcon={<AddCircleSharpIcon />}
        onClick={() => {
          if (window.location.pathname === "/insert") {
            toStepOne();
          } else {
            history.push("/insert");
          }
        }}
      >
        {content}
      </Button>
    </div>
  );
}
