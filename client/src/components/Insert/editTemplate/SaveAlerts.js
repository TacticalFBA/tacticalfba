import React from "react";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

export default function SaveAlert({ show, error }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (show) {
      setOpen(true);
    }
  }, [show]);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Collapse in={open}>
        <Alert severity="error">{error}</Alert>
      </Collapse>
    </div>
  );
}
