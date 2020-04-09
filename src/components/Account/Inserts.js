import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NewInsertBtn from "./NewInsertBtn";
import InsertItem from "./insertItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Inserts({
  user,
  inserts,
  history,
  location,
  toStepThree,
}) {
  const classes = useStyles();
  return (
    <div>
      {location.pathname === "/account" && (
        <NewInsertBtn history={history} content={"create an insert"} />
      )}
      {inserts.length > 0 && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            {inserts.map((insert) => (
              <Grid item xs={12} sm={6} key={insert.iid}>
                <InsertItem
                  className={classes.paper}
                  insert={insert}
                  history={history}
                  user={user}
                  location={location}
                  toStepThree={toStepThree}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
