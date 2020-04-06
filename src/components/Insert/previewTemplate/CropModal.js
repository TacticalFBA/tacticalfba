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
        {/* <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent style={{ width: "60vh", height: "70vh" }}>
          {/* <img src={img} alt="crop image" /> */}
          <CropImg
            url={img}
            aspect={aspect}
            cropShape={cropShape}
            item={item}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
