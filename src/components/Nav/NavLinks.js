import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function NavLinks() {
  const classes = useStyles();

  return (
    <div>
      <Button color="inherit">Services</Button>
      <Button color="inherit">Blog</Button>
      <Button color="inherit">Contact</Button>
    </div>
  );
}
