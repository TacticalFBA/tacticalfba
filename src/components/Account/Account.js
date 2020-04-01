import React from "react";

import { UserConsumer } from "../../contexts/UserContext";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Title from "../Styled/Title";
import Inserts from "./Inserts";
import Factories from "./Factories";
import Orders from "./Orders";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Account({ history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <UserConsumer>
      {({ user, adds, orders, inserts, handleDel }) => (
        <section className="container">
          <Title title={`Hello,  ${user}`} />
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Orders" {...a11yProps(0)} />
              <Tab label="Inserts" {...a11yProps(1)} />
              <Tab label="Factories" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Orders orders={orders} history={history} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Inserts
                inserts={inserts}
                handleDel={handleDel}
                history={history}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Factories user={user} adds={adds} handleDel={handleDel} />
            </TabPanel>
          </Paper>
        </section>
      )}
    </UserConsumer>
  );
}
