import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserConsumer } from "./contexts/UserContext";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// import components
// import NavBar from "./components/Nav/NavBar";
import ScrollTop from "./components/Nav/ScrollTop";
import Default from "./components/Default";
import Spinner from "./components/Spinner";
import MainNav from "./components/MainNav";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing.js";
import TemplateList from "./components/Insert/TemplateList";
import LoginModal from "./components/Account/LoginModal";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import EditTemplate from "./components/Insert/editTemplate/EditTemplate";
import Address from "./components/Address/Address";
import FinishSignUp from "./components/Account/FinishSignUp";
import BlogList from "./components/Blog/BlogList";
import Post from "./components/Blog/Post";
import ComingSoon from "./components/ComingSoon";
import Admin from "./components/Admin";

// setting theme color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000080",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
});

const App = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <UserConsumer>{({ spin }) => <Spinner spin={spin} />}</UserConsumer>
      <div className="App">
        <header className="App-header" id="back-to-top-anchor">
          <MainNav />
          {/* <NavBar /> */}
        </header>
        <main className="pTop">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/finish-signup" component={FinishSignUp} />
            <Route path="/about" component={About} />
            <Route path="/prices" component={Prices} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/account" component={Account} />
            <Route path="/insert" component={TemplateList} />
            <Route path="/photography" component={ComingSoon} />
            <Route path="/packaging-box" component={ComingSoon} />
            <Route path="/sticker-label" component={ComingSoon} />
            <Route path="/bar-code" component={ComingSoon} />
            <Route path="/edit-template/:pid" component={EditTemplate} />
            <Route path="/address" component={Address} />
            <Route exact path="/blog" component={BlogList} />
            <Route path="/post/:id" component={Post} />
            <Route path="/admin" component={Admin} />
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
