import React from "react";
import { UserConsumer } from "../../contexts/UserContext";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Stepper from "../Stepper";
import AddressForm from "./AddressForm";
import AddressTable from "./AddressTable";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "2rem",
    marginTop: "2.5rem"
  }
}));

export default function Address({ history, location }) {
  const classes = useStyles();
  return (
    <UserConsumer>
      {({ user, adds, handleDel }) => {
        return (
          <div className="container">
            <Stepper step={2} />
            <Paper className={classes.root}>
              {/* <Title
              title={"Factory Address"}
              subtitle={"Where should we send these inserts? Shipping is free!"}
            /> */}
              <AddressForm user={user} location={location} history={history} />

              <AddressTable
                user={user}
                adds={adds}
                history={history}
                handleDel={handleDel}
                type={"toCart"}
              />
            </Paper>
          </div>
        );
      }}
    </UserConsumer>
  );
}
