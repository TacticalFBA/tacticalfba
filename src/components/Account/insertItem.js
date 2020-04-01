import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 250
  }
});

export default function InsertCard({ insert, handleDel, history }) {
  const classes = useStyles();
  const chooseInsert = (pid, iid) => {
    const comb = {
      pid: pid,
      iid: iid
    };
    localStorage.setItem("comb", JSON.stringify(comb));
    history.push("/address");
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={insert.iName} />
      <CardMedia
        component="img"
        alt="front"
        image={insert.frontPre}
        title="Contemplative Reptile"
      />
      <CardMedia
        component="img"
        alt="rear"
        image={insert.backPre}
        title="Contemplative Reptile"
      />
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => chooseInsert(insert.pid, insert.iid)}
        >
          Use
        </Button>
        <Button
          size="small"
          onClick={() => handleDel(insert.iid, "insert", "iid")}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
