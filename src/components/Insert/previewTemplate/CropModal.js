import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import CropImg from "./CropImg/index";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  open,
  handleClose,
  img,
  aspect,
  cropShape,
  item,
  progress,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{ width: "60vh", height: "80vh" }}>
          <CropImg
            url={img}
            aspect={aspect}
            cropShape={cropShape}
            item={item}
          />
          <small style={{ textAlign: "center" }}>
            Image requiements:
            <br />
            JPG/JPEG only
            <br />
            Maximum file size: 3MB
          </small>
        </DialogContent>
      </Dialog>
    </div>
  );
}
