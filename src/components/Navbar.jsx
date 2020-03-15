import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import AccountNav from "./Account/AccountNav";
import CartBtn from "./Cart/CartBtn";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-3 top-fixed">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
            <h1>TacticalFBA</h1>
          </Link>
          <ul className="navbar-nav align-item-center">
            <li className="nav-item ml-3">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item ml-2">
              <NavLink className="nav-link" to="/prices">
                Prices
              </NavLink>
            </li>
            <li className="nav-item ml-2">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item ml-2">
              <NavLink className="nav-link" to="/new-card">
                Create New Card
              </NavLink>
            </li>
          </ul>
          <div className="ml-auto">
            <CartBtn />
            <AccountNav />
          </div>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.3);
  img {
    width: 1.8rem;
  }
  h1 {
    display: inline-block;
    color: var(--mainDark);
    font-size: 1.2rem;
    margin: 0 0 0 0.5rem;
    vertical-align: middle;
  }
  .nav-link {
    color: var(--mainDark);
    font-size: 1rem;
    text-transform: capitalize;
    &:hover {
      color: var(--mainOrange);
    }
  }
`;
