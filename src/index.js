import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { LoadProvider } from "./contexts/LoadContext";
import { UserProvider, UserConsumer } from "./context";
import * as serviceWorker from "./serviceWorker";
import Spinner from "./components/Spinner"

ReactDOM.render(
  <UserProvider>
    <UserConsumer>
      {({ spin }) => {
        return (
          <Spinner spin={spin} />
        )
      }}
    </UserConsumer>
    <Router>
      <App />
    </Router>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
