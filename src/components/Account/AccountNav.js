import React from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../contexts/UserContext";
import CartBtn from "../Cart/CartBtn";

export default function AccountNav() {
  return (
    <UserConsumer>
      {({ user, openModal, signOut,cart }) => {
        if (user) {
          return (
            <React.Fragment>
              <CartBtn cart={cart}/>
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
              className="btn btn-sm btn-orange ml-2"
              onClick={() => openModal("account")}
            >
              Login
            </button>
          );
        }
      }}
    </UserConsumer>
  );
}
