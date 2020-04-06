import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import getCroppedImg from "./cropImage";
import { InsertConsumer } from "../../../../contexts/InsertContext";

// const url =
//   "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

const Demo = ({ classes, url, aspect, cropShape, item }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // const onClose = useCallback(() => {
  //   setCroppedImage(null);
  // }, []);

  return (
    <div className={classes.root}>
      <div className={classes.cropContainer}>
        <Cropper
          image={url}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={aspect}
          cropShape={cropShape}
          showGrid={false}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className={classes.controls}>
        <div className={classes.sliderContainer}>
          <Typography variant="overline" className={classes.sliderLabel}>
            Zoom
          </Typography>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            className={classes.slider}
            onChange={(e, zoom) => setZoom(zoom)}
          />
        </div>
        {/* rotation */}
        {/* <div className={classes.sliderContainer}>
          <Typography variant="overline" className={classes.sliderLabel}>
            Rotation
          </Typography>
          <Slider
            value={rotation}
            min={0}
            max={360}
            step={1}
            aria-labelledby="Rotation"
            className={classes.slider}
            onChange={(e, rotation) => setRotation(rotation)}
          />
        </div> */}
        <InsertConsumer>
          {({ showCroppedImage }) => (
            <Button
              onClick={() =>
                showCroppedImage(url, croppedAreaPixels, rotation, item)
              }
              variant="contained"
              color="primary"
              className={classes.cropButton}
            >
              Save
            </Button>
          )}
        </InsertConsumer>
      </div>
    </div>
  );
};

const CropImg = withStyles(styles)(Demo);
export default CropImg;
