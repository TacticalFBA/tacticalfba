import React from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../context/userContext";
import CartBtn from "../Cart/CartBtn";

export default function AccountNav() {
  return (
    <UserConsumer>
      {({ user, openModal, signOut }) => {
        if (user) {
          return (
            <React.Fragment>
              <CartBtn />
              <Link to="/account" className="btn btn-sm mx-1">
                Account
              </Link>
              <Link
                to="/"
                className="btn btn-sm"
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </Link>
            </React.Fragment>
          );
        } else {
          return (
            <button
              className="btn btn-sm btn-primary ml-2"
              onClick={() => openModal()}
            >
              Login
            </button>
          );
        }
      }}
    </UserConsumer>
  );
}
