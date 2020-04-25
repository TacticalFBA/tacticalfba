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
            <Box display="flex" flexDirection="row" my={2} px={5}>
              <Box flexGrow={1}>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  Business Card Style
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 0,
                    }}
                  >
                    {[
                      "90 x 54 (mm)",
                      "cardstock",
                      "full-color",
                      "double-sided",
                    ].map((item, index) => {
                      return index === 0 ? (
                        <li key={index} style={{ marginLeft: "1rem" }}>
                          {item}
                        </li>
                      ) : (
                        <li key={index} style={{ marginLeft: "1.5rem" }}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  $ 50
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  per thousand
                </Typography>
              </Box>
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

              <Box mb={5} textAlign="center">
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
