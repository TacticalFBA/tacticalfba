import React from "react";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

export default function SaveAlert({ show, error }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (show) {
      setOpen(true);
    }
  });

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Collapse in={open}>
        <Alert
          severity="error"
          // action={
          //   <IconButton
          //     aria-label="close"
          //     color="inherit"
          //     size="small"
          //     onClick={() => {
          //       setOpen(false);
          //     }}
          //   >
          //     <CloseIcon fontSize="inherit" />
          //   </IconButton>
          //}
        >
          {error}
        </Alert>
      </Collapse>
    </div>
  );
}
