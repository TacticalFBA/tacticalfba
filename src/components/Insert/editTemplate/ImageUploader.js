import React, { useContext } from "react";
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
    <div>
      <input
        type="file"
        name={side}
        className={classes.input}
        id={side}
        accept="image/*"
        onChange={(e) => onSelectImg(e)}
      />
      <label htmlFor={side}>
        <Button
          size="small"
          component="span"
          variant="contained"
          disableElevation
        >
          {"Choose File"}
        </Button>
      </label>
    </div>
  );
}
