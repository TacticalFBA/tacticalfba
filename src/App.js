import React from "react";
import { Route, Switch } from "react-router-dom";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// import context
import { UserConsumer } from "./contexts/UserContext";

// import components
import Spinner from "./components/Spinner"
import NavBar from "./components/Navbar";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Landing from "./components/Landing/Landing.js"
import TemplateList from "./components/Insert/TemplateList";
import LoginModal from "./components/Account/LoginModal";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import EditTemplate from "./components/Insert/editTemplate/EditTemplate"
import Address from "./components/Address/Address"
import FinishSignUp from "./components/Account/FinishSignUp"


const App = () => {
  return (
    <UserConsumer>
      {
        ({ user, adds, orders, inserts, cart, spin, totalCart,addToCart, handleDel, increment, decrement, removeItem, clearCart }) => {
          return (
            <React.Fragment>
              <Spinner spin={spin} />
              <div className="App">
                <header className="App-header">
                  <NavBar/>
                </header>
                <main className="pTop">
                  <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/finish-signup" component={FinishSignUp} />
                    <Route path="/about" component={About} />
                    <Route path="/prices" component={Prices} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cart" render={props => <Cart user={user} cart={cart} totalCart={totalCart} increment={increment} decrement={decrement} removeItem={removeItem} clearCart={clearCart} {...props} />} />
                    <Route path="/account" render={props => <Account user={user} adds={adds} inserts={inserts} orders={orders} handleDel={handleDel} {...props} />} />
                    <Route path="/insert" component={TemplateList} />
                    <Route path="/edit-template/:pid" render={props => <EditTemplate user={user} {...props} />} />
                    <Route path="/address" render={props => <Address user={user} adds={adds} addToCart={addToCart} handleDel={handleDel}  {...props} />} />
                  </Switch>
                  <LoginModal />
                </main>
              </div>
            </React.Fragment>
          )
        }
      }
    </UserConsumer>
  );
};

export default App;
