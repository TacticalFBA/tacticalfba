import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { validation } from "./AddValidation";
import { CartConsumer } from "../../contexts/CartContext";
import { db } from "../../config/Firebase";
import Spinner from "../Spinner";
import Cheatsheet from "./Cheatsheet";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    maxWidth: "80vw",
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

export default function ContactForm({ user, location, history }) {
  const classes = useStyles();
  const [data, setData] = useState({
    factory: "",
    address: "",
    contact: "",
    email: "",
    mobile: "",
  });
  const [Err, setErr] = useState([]);
  const [Spin, setSpin] = useState(false);
  const [alert, setAlert] = useState({});
  const onChange = (e) => {
    let tempData = Object.assign({}, data);
    tempData[e.currentTarget.name] = e.currentTarget.value;
    setData(tempData);
  };
  const onBlur = (e) => {
    const field = e.currentTarget.name;
    const value = e.currentTarget.value;
    const checkList = validation.find((element) => element.field === field)
      .check;
    for (let i = 0; i < checkList.length; i++) {
      if (!checkList[i].rule.test(value)) {
        setErr([...Err, { field: field, message: checkList[i].message }]);
        return;
      } else {
        const tempError = [...Err].filter(
          (item) => item.message !== checkList[i].message
        );
        setErr(tempError);
      }
    }
  };
  const saveAdd = (cb) => {
    let count = 0;
    for (const key in data) {
      if (data[key].trim() !== "") count++;
    }
    if (Object.keys(Err).length === 0 && count === Object.keys(data).length) {
      setSpin(true);
      const newAdd = {
        factory: "",
        address: "",
        contact: "",
        email: "",
        mobile: "",
      };
      setData(newAdd);
      const ref = db.collection("users").doc(user).collection("factory");
      ref
        .add(data)
        .then((docRef) => {
          const aid = docRef.id;
          const comb = JSON.parse(localStorage.getItem("comb"));
          comb.aid = aid;
          localStorage.setItem("comb", JSON.stringify(comb));
          if (location.pathname === "/address") {
            cb(history);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setAlert({
        severity: "error",
        message: "Please complete all fields.",
      });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({});
  };
  const [CheatSheetOpen, setCheatSheetOpen] = React.useState(false);

  const OpenCheatSheet = () => {
    setCheatSheetOpen(true);
  };

  const closeCheatSheet = () => {
    setCheatSheetOpen(false);
  };
  return (
    <React.Fragment>
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

      <form className={classes.form} autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              autoFocus
              className={classes.textField}
              id="factory"
              label="Factory Name"
              placeholder="Sneaker Factory"
              name="factory"
              value={data.factory}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(Err.find((item) => item.field === "factory"))}
              helperText={
                (Err.find((item) => item.field === "factory") &&
                  Err.find((item) => item.field === "factory").message) ||
                "Assign a nickname for your factory"
              }
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              required
              className={classes.textField}
              label="Factory Address"
              placeholder="上海市徐汇区天平路120号1220室"
              name="address"
              value={data.address}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(Err.find((item) => item.field === "address"))}
              helperText={
                (Err.find((item) => item.field === "address") &&
                  Err.find((item) => item.field === "address").message) ||
                "in Chinese"
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              className={classes.textField}
              label="Factory Contact Name"
              placeholder="刘德华"
              name="contact"
              value={data.contact}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(Err.find((item) => item.field === "contact"))}
              helperText={
                (Err.find((item) => item.field === "contact") &&
                  Err.find((item) => item.field === "contact").message) ||
                "in Chinese"
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              className={classes.textField}
              label="Factory Contact Email"
              placeholder="andylau@sneakerfactory.com"
              name="email"
              value={data.email}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(Err.find((item) => item.field === "email"))}
              helperText={
                Err.find((item) => item.field === "email") &&
                Err.find((item) => item.field === "email").message
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              className={classes.textField}
              label="Factory Contact Mobile"
              placeholder="13800000000"
              name="mobile"
              value={data.mobile}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(Err.find((item) => item.field === "mobile"))}
              helperText={
                (Err.find((item) => item.field === "mobile") &&
                  Err.find((item) => item.field === "mobile").message) ||
                "11 digit Chinese number"
              }
            />
          </Grid>
        </Grid>
        <Box margin="5vh auto 0">
          <Box>
            <CartConsumer>
              {({ addToCart }) => (
                <Button
                  // size="small"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => saveAdd(addToCart)}
                >
                  Next
                </Button>
              )}
            </CartConsumer>
          </Box>
          <Box mt={1}>
            <Button
              style={{ textDecoration: "underline" }}
              color="primary"
              size="small"
              fullWidth
              onClick={OpenCheatSheet}
            >
              Cheatsheet to send to factory
            </Button>
            <Cheatsheet open={CheatSheetOpen} handleClose={closeCheatSheet} />
          </Box>
        </Box>
      </form>
    </React.Fragment>
  );
}
