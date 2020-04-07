import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  makeStyles,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { firebase, db } from "../config/Firebase";
import Spinner from "../components/Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
    maxWidth: "80vw",
    margin: "0 auto",
  },
  alert: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  textField: {
    width: "50%",
  },
}));

export default ({ location, history }) => {
  const classes = useStyles();
  const [Email, setEmail] = useState("");
  const [Err, setErr] = useState(null);
  const [Spin, setSpin] = useState(false);
  const [alert, setAlert] = useState({});
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onBlur = (e) => {
    const emailReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const emptyReg = /\S/;
    if (!emptyReg.test(e.target.value)) {
      setErr("Enter an email");
      return;
    }
    if (!emailReg.test(e.target.value)) {
      setErr("Invalid email address");
      return;
    }
    setErr(null);
  };
  const handleClick = () => {
    // check if email format is valid
    if (Err) {
      return;
    }

    // start spinner
    setSpin(true);

    // set textfielf to empty
    setEmail("");

    // check if the email already exists
    const collectionRef = db.collection("mailing list");
    collectionRef
      .where("Email", "==", Email)
      .get()
      .then((snapshot) => {
        // console.log(snapshot.docs.length);
        // if not exist, add to db
        if (snapshot.docs.length === 0) {
          const obj = {
            Email: Email,
            Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          };
          collectionRef
            .add(obj)
            .then(() => {
              // close spinner
              setSpin(false);
              // open alert
              setAlert({
                severity: "success",
                message: "Thanks for subscribing to the mailing list!",
              });
            })
            .catch((error) => console.log(error.message));
        } else {
          // if exists
          setSpin(false);
          // open alert
          setAlert({
            severity: "error",
            message: "You have already subscribed to the mailing list.",
          });
        }
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({});
  };

  return (
    <React.Fragment>
      {/* spinner : default closed */}
      <Spinner spin={Spin} />

      <Snackbar
        open={JSON.stringify(alert) !== "{}"}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          severity={alert.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlert({});
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alert.message}
        </Alert>
      </Snackbar>

      <Box component="div" textAlign="center">
        <Box
          component="div"
          textAlign="center"
          marginTop="10vh"
          marginBottom="5vh"
        >
          <Typography variant="h4">Coming Soon...</Typography>
          <Box my={3}>
            <Typography variant="subtitle1">
              Join our mailing list to get notified when this service goes live!
            </Typography>
          </Box>
          <Paper className={classes.root}>
            <Box>
              <TextField
                label="Email"
                id="email"
                required
                className={classes.textField}
                value={Email}
                onChange={onChange}
                onBlur={onBlur}
                error={Boolean(Err)}
                helperText={Err}
              />
            </Box>

            <Box margin="8vh auto 0">
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={handleClick}
              >
                subscribe
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </React.Fragment>
  );
};
