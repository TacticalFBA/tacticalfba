import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default ({ open, CloseOpenGuideLineModal }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={CloseOpenGuideLineModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"What are the guide lines for?"}
        </DialogTitle>
        <DialogContent>
          <ul>
            <li>
              The outer dotted line represents the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Bleed_(printing)"
                target="_blank"
                rel="noopener noreferrer"
              >
                bleed
              </a>{" "}
              line showing where the card will be cut.
            </li>
            <li>
              The inner solid line represents the safety line denoting where all
              text and graphics should be contained.
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            color="primary"
            onClick={CloseOpenGuideLineModal}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
