import React from "react";
import CropModal from "./CropModal";
import { InsertConsumer } from "../../../contexts/InsertContext";
import T0 from "./T0";
import T1 from "./T1";
import T2 from "./T2";

export default function Preview({ pid, content, onSelect, frontRef, backRef }) {
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
      {({
        open,
        handleClose,
        cropInfo,
        handleClickOpen,
        onSelectImg,
        progress,
      }) => (
        <React.Fragment>
          <div>{renderTemplates(handleClickOpen)}</div>
          <CropModal
            open={open}
            handleClose={handleClose}
            img={cropInfo.img}
            aspect={cropInfo.aspect}
            cropShape={cropInfo.cropShape}
            item={cropInfo.item}
            onSelectImg={onSelectImg}
            progress={progress}
          />
        </React.Fragment>
      )}
    </InsertConsumer>
  );
}
