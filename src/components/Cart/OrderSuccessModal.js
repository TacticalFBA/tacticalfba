import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default ({ open, handleClose, history }) => {
  const [counter, setCounter] = React.useState(3);
  useEffect(() => {
    if (open) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      counter === 0 && history.push("/account");
    }
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Order Success!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Redirecting to your order history page after {counter} seconds...
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
