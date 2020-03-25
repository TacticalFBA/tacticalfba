import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../logo.svg";
import AccountNav from "./Account/AccountNav";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top" style={style}>
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <h1 style={style.h1}>TacticalFBA</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">


              <NavLink className="nav-link" to="/about">
                About
                </NavLink>


              <NavLink className="nav-link" to="/prices">
                Prices
                </NavLink>


              <NavLink className="nav-link" to="/contact">
                Contact
                </NavLink>

            </Nav>
            <Nav className="ml-auto">
              <AccountNav/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const style = {
  background: "var(--mainWhite)",
  boxShadow: "0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.3)",
  h1: {
    display: "inline-block",
    color: "var(--mainDark)",
    fontSize: "1.2rem",
    marginLeft: "1rem"
  },
  li: {
    display: "inline-block",
  }
}

  // .nav-link {
  //   color: var(--mainDark);
  //   font-size: 1rem;
  //   text-transform: capitalize;
  //   &:hover {
  //     color: var(--mainOrange);
  //   }
  // }
