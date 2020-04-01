import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { UserConsumer } from "../../contexts/UserContext";

// products data
import { products } from "../../data";

// import components
import Stepper from "../Stepper";
import UserInserts from "./UserInserts";
import TemplateItem from "./TemplateItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "2rem",
    marginTop: "2.5rem"
  }
}));

export default function TemplateList({ history, handlePid }) {
  const classes = useStyles();
  // get all products that type is "Insert" as templates
  const templates = products.filter(product => product.type === "Insert");

  return (
    <div className="container">
      <Stepper step={0} />
      {/* or choose from templates anyway */}
      <Paper className={classes.root}>
        {/* <Title title={"Choose a template"} /> */}
        {/* if user already has some inserts saved, list them for choose */}
        <div>
          <UserConsumer>
            {({ inserts }) => {
              return (
                <div>
                  {inserts.length > 0 && (
                    <UserInserts history={history} myInserts={inserts} />
                  )}
                </div>
              );
            }}
          </UserConsumer>
        </div>

        {/* Todo: allow to upload own insert file */}
        {/* <span> or upload your own artwork</span> */}
        <div className="row">
          {templates.map(template => (
            <TemplateItem
              key={template.pid}
              template={template}
              handlePid={handlePid}
            />
          ))}
        </div>
      </Paper>
    </div>
  );
}
