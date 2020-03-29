import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <UserProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
