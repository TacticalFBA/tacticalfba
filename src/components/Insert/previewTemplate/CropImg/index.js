import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { InsertConsumer } from "../../../../contexts/InsertContext";
import ImageUploader from "../../editTemplate/ImageUploader";

const Demo = ({ classes, url, aspect, cropShape, item }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

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
      </div>
      <InsertConsumer>
        {({ showCroppedImage, onSelectImg, cropInfo }) => (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignContent="center"
          >
            <Box style={{ width: "40%" }}>
              <ImageUploader onSelectImg={onSelectImg} side={cropInfo.item} />
            </Box>
            <Box style={{ width: "10%" }}> </Box>
            <Box style={{ width: "40%" }}>
              <Button
                onClick={() =>
                  showCroppedImage(
                    url,
                    croppedAreaPixels,
                    rotation,
                    item,
                    setZoom
                  )
                }
                variant="outlined"
                size="small"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </Box>
          </Box>
        )}
      </InsertConsumer>
    </div>
  );
};

const CropImg = withStyles(styles)(Demo);
export default CropImg;
