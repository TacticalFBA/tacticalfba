import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserConsumer } from "./contexts/UserContext";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// import components
import Default from "./components/Default";
import Spinner from "./components/Spinner";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
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

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <UserConsumer>{({ spin }) => <Spinner spin={spin} />}</UserConsumer>
      <div className="App">
        <header className="App-header">
          <NavBar />
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
            <Route path="/edit-template/:pid" component={EditTemplate} />
            <Route path="/address" component={Address} />
            <Route exact path="/blog" component={BlogList} />
            <Route path="/post/:id" component={Post} />
            <Route component={Default}></Route>
          </Switch>
          <LoginModal />
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
