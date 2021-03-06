import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AccountNav from "../Account/AccountNav";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    float: "left",
  },
  navLink: {
    fontWeight: 700,
    color: "var(--mainDark)",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MainNav({ history }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const logoURL = `${process.env.PUBLIC_URL}/img/logo.png`;

  return (
    <Navbar bg="light" expand="lg" fixed="top" style={style}>
      <Container>
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            <img
              alt=""
              src={logoURL}
              // width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {/* <h1 style={{ textIndent: "-99999px" }}>TacticalFBA</h1> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className={classes.root}>
              {/* services */}
              <Button
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.navLink}
                endIcon={<ExpandMoreIcon />}
                style={{ margin: "0 .5rem 0 1rem" }}
              >
                Services
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <Link
                            to="/insert"
                            style={{
                              textDecoration: "none",
                              color: "#000",
                            }}
                            onClick={handleClose}
                          >
                            <MenuItem>Product Inserts</MenuItem>
                          </Link>

                          <Link
                            to="/photography"
                            style={{ textDecoration: "none", color: "#000" }}
                            onClick={handleClose}
                          >
                            <MenuItem>Product Photography</MenuItem>
                          </Link>
                          <Link
                            to="/packaging-box"
                            style={{ textDecoration: "none", color: "#000" }}
                            onClick={handleClose}
                          >
                            <MenuItem>Packaging Boxes</MenuItem>
                          </Link>
                          <Link
                            to="/sticker-label"
                            style={{ textDecoration: "none", color: "#000" }}
                            onClick={handleClose}
                          >
                            <MenuItem>Sticker Labels</MenuItem>
                          </Link>
                          <Link
                            to="/barcode"
                            style={{ textDecoration: "none", color: "#000" }}
                            onClick={handleClose}
                          >
                            <MenuItem>Barcodes</MenuItem>
                          </Link>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              {/* blog */}
              {/* <Button style={{ margin: "0 .5rem" }}>
                <Link className={classes.navLink} to="/blog">
                  Blog
                </Link> */}
              {/* </Button> */}
              {/* about us */}
              <Button style={{ margin: "0 .5rem" }}>
                <Link className={classes.navLink} to="/about-us">
                  About Us
                </Link>
              </Button>
              {/* contact */}
              <Button style={{ margin: "0 .5rem" }}>
                <Link className={classes.navLink} to="/contact-us">
                  Contact Us
                </Link>
              </Button>
              {/* FAQ */}
              <Button style={{ margin: "0 .5rem" }}>
                <Link className={classes.navLink} to="/faq">
                  FAQ
                </Link>
              </Button>
            </div>
          </Nav>
          <Nav className="ml-auto">
            <AccountNav />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const style = {
  background: "var(--mainWhite)",
  boxShadow: "0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.3)",
  h1: {
    display: "inline-block",
    color: "var(--mainDark)",
    fontSize: "1.2rem",
    marginLeft: "1rem",
  },
  li: {
    display: "inline-block",
  },
};
