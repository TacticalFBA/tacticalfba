import React from "react";
import { Route, Switch } from "react-router-dom";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// import components
import NavBar from "./components/Navbar";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Landing from "./components/Landing/Landing.js"
import TemplateList from "./components/Insert/TemplateList";
import LoginModal from "./components/Account/LoginModal";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import EditTemplate from "./components/Insert/EditTemplate.jsx";
import Address from "./components/Address/Address"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="pTop">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/new-card" component={TemplateList} />
          <Route path="/about" component={About} />
          <Route path="/prices" component={Prices} />
          <Route path="/contact" component={Contact} />
          <Route path="/account" component={Account} />
          <Route path="/cart" component={Cart} />
          <Route path="/edit-template/:pid" component={EditTemplate} />
          <Route path="/address/:tempInfo" component={Address} />
        </Switch>
        <LoginModal />
      </main>
    </div>
  );
};

export default App;
