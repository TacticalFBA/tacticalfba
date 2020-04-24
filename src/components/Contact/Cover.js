import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: 0,
    color: "white",
    height: "65vh",
    background: `url(${process.env.PUBLIC_URL}/img/contact.jpg) center 3% no-repeat`,
    backgroundSize: "cover",
    position: "relative",
    zIndex: "9",
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "99",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(45deg, rgba(92, 37, 141, 0.5) 10%, rgba(67, 137, 162, 0.5) 90%)",
    },
  },
  text: {
    position: "absolute",
    zIndex: "999",
    color: "#fff",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});

export default function Cover() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <h4
          style={{
            fontWeight: "700",
            marginBottom: "1.5rem",
            color: "#fff",
            fontSize: "2.2rem",
            letterSpacing: "1.5px",
          }}
        >
          Get in touch
        </h4>
        <p style={{ fontSize: "1.1rem" }}>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us...
        </p>
      </div>
    </div>
  );
}
