import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function ImageUploader({ onSelectImg, side }) {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <input
        type="file"
        name={side}
        className={classes.input}
        id={side}
        accept="image/jpeg,image/jpg"
        onChange={(e) => onSelectImg(e)}
      />
      <label htmlFor={side} style={{ width: "100%" }}>
        <Button
          size="small"
          component="span"
          variant="contained"
          color="primary"
          fullWidth
        >
          {"Choose File"}
        </Button>
      </label>
    </div>
  );
}
