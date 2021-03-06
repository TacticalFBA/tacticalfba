import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserConsumer } from "./contexts/UserContext";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// import components

import ScrollTop from "./components/Nav/ScrollTop";
import Default from "./components/Default";
import Spinner from "./components/Spinner";
import MainNav from "./components/Nav/MainNav";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing.js";
import LoginModal from "./components/Account/LoginModal";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import FinishSignUp from "./components/Account/FinishSignUp";
import FAQ from "./components/FAQ";
import BlogList from "./components/Blog/BlogList";
import Post from "./components/Blog/Post";
import ComingSoon from "./components/ComingSoon";
import Insert from "./components/Insert";
import AboutUs from "./components/AboutUs";

// setting theme color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#10069F",
    },
    secondary: {
      main: "#cd5360",
    },
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

const App = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <UserConsumer>{({ spin }) => <Spinner spin={spin} />}</UserConsumer>
      <div className="App">
        <header className="App-header" id="back-to-top-anchor">
          <MainNav />
        </header>
        <main className="pTop">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/finish-signup" component={FinishSignUp} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/faq" component={FAQ} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/insert" component={Insert} />
            <Route path="/photography" component={ComingSoon} />
            <Route path="/packaging-box" component={ComingSoon} />
            <Route path="/sticker-label" component={ComingSoon} />
            <Route path="/barcode" component={ComingSoon} />
            {/* <Route exact path="/blog" component={BlogList} /> */}
            <Route path="/post/:id" component={Post} />
            <Route component={Default}></Route>
          </Switch>
          <LoginModal />
        </main>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
