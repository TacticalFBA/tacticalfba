import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// products data
import { products } from "../../data";

// import components
import Stepper from "../Stepper";
import Inserts from "../Account/Inserts";
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
  handlePid,
  location,
  inserts,
  user,
  openModal,
}) {
  const classes = useStyles();
  // get all products that type is "Insert" as templates
  const templates = products.filter((product) => product.type === "Insert");
  const handleLoad = () => {
    !user && openModal("insert");
  };
  React.useEffect(() => {
    handleLoad();
  }, [1]);

  return (
    <div className="container">
      <Stepper step={0} />
      {/* or choose from templates anyway */}
      <Paper className={classes.root}>
        {/* <span> or upload your own artwork</span> */}
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
              handlePid={handlePid}
            />
          ))}
        </div>
      </Paper>
      <Paper className={classes.root}>
        {/* if user already has some inserts saved, list them for choose */}

        <Box mb={3} textAlign="center">
          <Typography variant="h6">Your Saved Inserts</Typography>
        </Box>
        <Box>
          <React.Fragment>
            {inserts.length > 0 && (
              // <UserInserts history={history} myInserts={inserts} />
              <Inserts
                history={history}
                inserts={inserts}
                location={location}
              />
            )}
          </React.Fragment>
        </Box>
      </Paper>
    </div>
  );
}
