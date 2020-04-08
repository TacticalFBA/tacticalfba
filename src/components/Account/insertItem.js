import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CartConsumer } from "../../contexts/CartContext";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    // maxWidth: 250,
  },
  media: {
    width: "50%",
  },
});

export default function InsertCard({ user, insert, history, location }) {
  const classes = useStyles();
  const chooseInsert = (pid, iid) => {
    const comb = {
      pid: pid,
      iid: iid,
    };
    localStorage.setItem("comb", JSON.stringify(comb));
    history.push("/address");
  };

  return (
    <Card className={classes.root}>
      {/* <CardHeader
        title={insert.iName}
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardActions> */}
      <Box display="flex" flexDirection="row" p={2}>
        <Box flexGrow={1}>{insert.iName}</Box>
        <Box display="flex" flexDirection="row">
          <Box mr={2}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => chooseInsert(insert.pid, insert.iid)}
            >
              Use
            </Button>
          </Box>
          {location.pathname === "/account" && (
            <CartConsumer>
              {({ handleDel }) => (
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleDel(user, insert.iid, "insert", "iid")}
                >
                  Delete
                </Button>
              )}
            </CartConsumer>
          )}
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="center">
        <CardMedia
          className={classes.media}
          component="img"
          alt="front"
          image={insert.frontPre}
          title="Contemplative Reptile"
        />
        <CardMedia
          className={classes.media}
          component="img"
          alt="rear"
          image={insert.backPre}
          title="Contemplative Reptile"
        />
      </Box>
    </Card>
  );
}
