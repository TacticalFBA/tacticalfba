import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { CFV } from "./ContactFormValidation";
import Spinner from "../Spinner";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(7),
    color: theme.palette.text.secondary,
    maxWidth: "75vw",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  textField: {
    width: "100%",
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [Error, setError] = useState([]);
  const [spin, setSpin] = useState(false);
  const onChange = (e) => {
    let tempData = Object.assign({}, data);
    tempData[e.currentTarget.name] = e.currentTarget.value;
    setData(tempData);
  };
  const onBlur = (e) => {
    const field = e.currentTarget.name;
    const value = e.currentTarget.value;
    const validator = CFV.filter((element) => element.field === field)[0];
    const message = validator.check.message;
    if (
      !validator.check.rule.test(value) &&
      !Error.find((item) => item.field === field)
    ) {
      setError([...Error, { field: field, message: message }]);
    } else {
      const tempError = Error.filter((item) => item.field !== field);
      setError(tempError);
    }
  };

  const handleSubmit = () => {
    for (const key in data) {
      if (data[key] === "") {
        return false;
      }
    }
    if (Error.length > 0) return false;

    setSpin(true);
    const endpoint = "api/contactForm";
    // console.log(tempData);
    axios
      .post(`https://tfbaserver.herokuapp.com/${endpoint}`, data)
      .then((res) => {
        console.log(res);
        setSpin(false);
        if (res.status === 200) {
          setData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          alert("Message sent, we will contact you soon :)");
        } else {
          alert("oops, something went wron, try again later");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Paper className={classes.root}>
      <Spinner spin={spin} />
      <form className={classes.form} autoComplete="off">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              autoFocus
              className={classes.textField}
              id="name"
              label="Name"
              name="name"
              value={data.name}
              onChange={(e) => onChange(e)}
              onBlur={(e) => onBlur(e)}
              error={Boolean(Error.find((item) => item.field === "name"))}
              helperText={
                Error.find((item) => item.field === "name") &&
                Error.filter((item) => item.field === "name")[0].message
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              className={classes.textField}
              id="email"
              label="Email"
              name="email"
              value={data.email}
              onChange={(e) => onChange(e)}
              onBlur={(e) => onBlur(e)}
              error={Boolean(Error.find((item) => item.field === "email"))}
              helperText={
                Error.find((item) => item.field === "email") &&
                Error.filter((item) => item.field === "email")[0].message
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              className={classes.textField}
              id="subject"
              label="Subject"
              name="subject"
              placeholder="If you are inquiring about an order, please include your order number here."
              value={data.subject}
              onChange={(e) => onChange(e)}
              onBlur={(e) => onBlur(e)}
              error={Boolean(Error.find((item) => item.field === "subject"))}
              helperText={
                Error.find((item) => item.field === "subject") &&
                Error.filter((item) => item.field === "subject")[0].message
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              className={classes.textField}
              multiline
              rowsMax="5"
              id="message"
              label="Message"
              name="message"
              value={data.message}
              onChange={(e) => onChange(e)}
              onBlur={(e) => onBlur(e)}
              error={Boolean(Error.find((item) => item.field === "message"))}
              helperText={
                Error.find((item) => item.field === "message") &&
                Error.filter((item) => item.field === "message")[0].message
              }
            />
          </Grid>
        </Grid>
        <Box margin="10vh auto 0">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
