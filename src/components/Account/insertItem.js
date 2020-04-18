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

export default function InsertCard({ user, insert, location, toStepThree }) {
  const classes = useStyles();

  const chooseInsert = (pid, iid) => {
    localStorage.setItem("pid", pid);
    localStorage.setItem("iid", iid);
    toStepThree();
  };

  return (
    <Card className={classes.root}>
      <Box display="flex" flexDirection="row" p={2}>
        <Box flexGrow={1}>{insert.iName}</Box>
        <Box display="flex" flexDirection="row">
          {window.location.pathname === "/insert" && (
            <Box>
              <Button
                size="small"
                color="primary"
                onClick={() => chooseInsert(insert.pid, insert.iid)}
              >
                Use
              </Button>
            </Box>
          )}
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
          title="front"
          style={{ padding: "0 8px 8px 8px" }}
        />
        <CardMedia
          className={classes.media}
          component="img"
          alt="rear"
          image={insert.backPre}
          title="rear"
          style={{ padding: "0 8px 8px 0" }}
        />
      </Box>
    </Card>
  );
}
