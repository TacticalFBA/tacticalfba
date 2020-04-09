import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserConsumer } from "../contexts/UserContext";
import Account from "./Account/Account";

export default function AuthedRoutes() {
  return (
    <UserConsumer>
      {({ user, openModal }) => {
        return <Route path="/account" component={Account} />;
      }}
    </UserConsumer>
  );
}
