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

export default function Inserts({ user, inserts, history, location }) {
  const classes = useStyles();
  // const chooseInsert = (pid, iid) => {
  //   const comb = {
  //     pid: pid,
  //     iid: iid
  //   };
  //   localStorage.setItem("comb", JSON.stringify(comb));
  //   history.push("/address");
  // };

  // const editInsert = (pid, iid) => {
  //   history.push(`/edit-template/${pid}/${iid}`);
  // };
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
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
