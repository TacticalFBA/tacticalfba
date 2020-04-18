import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// products data
import { products } from "../../../data";
import { UserConsumer } from "../../../contexts/UserContext";

// import components
import Inserts from "../../Account/Inserts";
import TemplateItem from "./TemplateItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "2rem",
    marginTop: "2.5rem",
  },
}));

export default function TemplateList({
  history,
  location,
  stepForward,
  toStepThree,
}) {
  const classes = useStyles();
  // get all products that type is "Insert" as templates
  const templates = products.filter((product) => product.type === "Insert");

  return (
    <UserConsumer>
      {({ inserts }) => (
        <React.Fragment>
          <Paper className={classes.root}>
            <Box mb={3} textAlign="center">
              <Typography variant="h6">
                Choose from our templates or Upload your own
              </Typography>
            </Box>
            <div className="row">
              {templates.map((template) => (
                <TemplateItem
                  key={template.pid}
                  template={template}
                  stepForward={stepForward}
                />
              ))}
            </div>
          </Paper>
          {inserts.length > 0 && (
            <Paper className={classes.root}>
              {/* if user already has some inserts saved, list them for choose */}

              <Box mb={3} textAlign="center">
                <Typography variant="h6">Saved Inserts</Typography>
              </Box>
              <Box>
                <React.Fragment>
                  <Inserts
                    history={history}
                    inserts={inserts}
                    location={location}
                    toStepThree={toStepThree}
                  />
                </React.Fragment>
              </Box>
            </Paper>
          )}
        </React.Fragment>
      )}
    </UserConsumer>
  );
}
