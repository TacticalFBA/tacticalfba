import React, { useState } from "react";
import CropModal from "./CropModal";
import { InsertConsumer } from "../../../contexts/InsertContext";
import T0 from "./T0";
import T1 from "./T1";
import T2 from "./T2";

export default function Preview({ pid, content, onSelect, frontRef, backRef }) {
  // const [open, setOpen] = useState(false);
  // const [cropInfo, setCropInfo] = useState({
  //   img: "",
  //   aspect: 1,
  //   cropShape: "",
  //   item: "",
  // });
  // const handleClickOpen = (img, aspect, cropShape, item) => {
  //   setCropInfo({
  //     img: img,
  //     aspect: aspect,
  //     cropShape: cropShape,
  //     item: item,
  //   });
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const renderTemplates = (handleClickOpen) => {
    switch (pid) {
      case 0:
        return (
          <T0
            content={content}
            onSelect={onSelect}
            frontRef={frontRef}
            backRef={backRef}
            handleClickOpen={handleClickOpen}
          />
        );
      case 1:
        return (
          <T1
            content={content}
            onSelect={onSelect}
            frontRef={frontRef}
            backRef={backRef}
            handleClickOpen={handleClickOpen}
          />
        );
      case 2:
        return (
          <T2
            content={content}
            onSelect={onSelect}
            frontRef={frontRef}
            backRef={backRef}
            handleClickOpen={handleClickOpen}
          />
        );
      default:
        return <div>Template not founded</div>;
    }
  };
  return (
    <InsertConsumer>
      {({ open, handleClose, cropInfo, handleClickOpen }) => (
        <React.Fragment>
          <div>{renderTemplates(handleClickOpen)}</div>
          <CropModal
            open={open}
            handleClose={handleClose}
            img={cropInfo.img}
            aspect={cropInfo.aspect}
            cropShape={cropInfo.cropShape}
            item={cropInfo.item}
          />
        </React.Fragment>
      )}
    </InsertConsumer>
  );
}
