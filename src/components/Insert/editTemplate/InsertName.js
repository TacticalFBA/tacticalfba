import React from "react";
import Textfield from "@material-ui/core/TextField";

export default function InsertName({ iName, handleInsertName }) {
  return (
    <Textfield
      value={iName}
      placeholder="My Template..."
      label="Name your insert"
      variant="outlined"
      required
      size="small"
      onChange={handleInsertName}
      style={{ paddingRight: "1rem", width: "20rem", verticalAlign: "middle" }}
    />
  );
}
