import React from "react";
import { Route, Switch } from "react-router-dom";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// import components
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

const App = () => {
  return (
    <React.Fragment>
      <Spinner />
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
            <Route path="/account" component={Account} />
            <Route path="/insert" component={TemplateList} />
            <Route path="/edit-template/:pid" component={EditTemplate} />
            <Route path="/address" component={Address} />
          </Switch>
          <LoginModal />
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
