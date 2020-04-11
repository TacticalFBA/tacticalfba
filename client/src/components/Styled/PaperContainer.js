import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "1rem",
    marginTop: "2.5rem"
  }
}));

export default function PaperContainer({ component }) {
  const classes = useStyles();
  return <Paper className={classes.root}>{component}</Paper>;
}
