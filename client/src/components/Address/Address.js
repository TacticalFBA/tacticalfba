import React from "react";
import { UserConsumer } from "../../contexts/UserContext";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// import AddressForm from "./AddressForm";
import AddressTable from "./AddressTable";
import AddForm from "./AddForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "2rem",
    marginTop: "2.5rem",
  },
}));

export default function Address({ history, location, stepForward }) {
  const classes = useStyles();
  return (
    <UserConsumer>
      {({ user, adds, handleDel }) => {
        return (
          <div className="container">
            <Paper className={classes.root}>
              <AddForm
                user={user}
                location={location}
                history={history}
                stepForward={stepForward}
              />
            </Paper>
            {adds.length > 0 && (
              <Paper className={classes.root}>
                <AddressTable
                  user={user}
                  adds={adds}
                  history={history}
                  handleDel={handleDel}
                  type={"toCart"}
                  stepForward={stepForward}
                />
              </Paper>
            )}
          </div>
        );
      }}
    </UserConsumer>
  );
}
