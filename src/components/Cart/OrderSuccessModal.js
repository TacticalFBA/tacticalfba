import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import CheckCircleOutlineSharpIcon from "@material-ui/icons/CheckCircleOutlineSharp";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default ({ open, handleClose, history, user }) => {
  // const [counter, setCounter] = React.useState(3);
  // useEffect(() => {
  //   if (open) {
  //     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  //     counter === 0 && history.push("/account");
  //   }
  // });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogContent style={{ textAlign: "center" }}>
        <CheckCircleOutlineSharpIcon
          style={{ color: green[500], fontSize: 60 }}
          // color="primary"
        />
        <DialogContentText id="alert-dialog-description">
          <Box my={2}>
            <Typography variant="h6">Order Successful!</Typography>
          </Box>
          Thank you. A confirmation email has been sent to{" "}
          <span style={{ fontWeight: 700 }}>{user}</span>
          {/* Redirecting to your order history page after {counter} seconds... */}
        </DialogContentText>
        <DialogActions>
          <Button onClick={() => history.push("/account")} color="primary">
            order history
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
