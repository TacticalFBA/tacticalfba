import React from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../contexts/UserContext";
import CartBtn from "./CartBtn";
import Button from "@material-ui/core/Button";

export default function AccountNav() {
  return (
    <UserConsumer>
      {({ user, openModal, signOut }) => {
        if (user) {
          return (
            <React.Fragment>
              <CartBtn />
              <Link
                to="/account"
                className="juzhong"
                style={{ textDecoration: "none", marginRight: ".5rem" }}
              >
                <Button size="small">My Account</Button>
              </Link>
              <Link
                to="/"
                className="juzhong"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  signOut();
                }}
              >
                <Button size="small">Sign Out</Button>
              </Link>
            </React.Fragment>
          );
        } else {
          return (
            <Button size="small" onClick={() => openModal("account")}>
              Login
            </Button>
          );
        }
      }}
    </UserConsumer>
  );
}
