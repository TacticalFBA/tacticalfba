import React, { Component } from "react";
import { products } from "../data";
import { db } from "../config/Firebase";

const CartContext = React.createContext();

class CartProvider extends Component {
  state = {
    cart: [],
    cartTotal: 0,
  };

  componentDidMount() {
    if (localStorage.getItem("cart")) {
      this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
      this.addTotals();
    }
  }

  // find cart Item
  getCartItem = (cid) => {
    const cartItem = this.state.cart.find((item) => item.cid === cid);
    return cartItem;
  };

  increment = (cid) => {
    let tempCart = [...this.state.cart];
    const cartItem = this.getCartItem(cid);
    const index = tempCart.indexOf(cartItem);
    const product = tempCart[index];
    product.count++;
    product.total = product.price * product.count;
    localStorage.setItem("cart", JSON.stringify(tempCart));
    this.setState({ cart: [...tempCart] }, () => {
      this.addTotals();
    });
  };

  decrement = (cid) => {
    let tempCart = [...this.state.cart];
    const cartItem = this.getCartItem(cid);
    const index = tempCart.indexOf(cartItem);
    const product = tempCart[index];
    product.count--;
    if (product.count === 0) {
      this.removeItem(cid);
    } else {
      product.total = product.price * product.count;
      localStorage.setItem("cart", JSON.stringify(tempCart));
      this.setState({ cart: [...tempCart] }, () => {
        this.addTotals();
      });
    }
  };

  removeItem = (cid) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.cid !== cid);
    localStorage.setItem("cart", JSON.stringify(tempCart));
    this.setState({ cart: [...tempCart] }, () => {
      this.addTotals();
    });
  };

  addTotals = () => {
    let total = 0;
    JSON.parse(localStorage.getItem("cart")).map(
      (item) => (total += item.total)
    );
    this.setState({
      cartTotal: total,
    });
  };

  clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    this.setState(
      {
        cart: [],
      },
      () => {
        this.addTotals();
      }
    );
  };

  // cart manipulation end

  addToCart = (stepForward) => {
    const pid = parseInt(localStorage.getItem("pid"));
    const iid = localStorage.getItem("iid");
    const aid = localStorage.getItem("aid");
    const cid = iid + "&" + aid;

    const product = products.find((product) => product.pid === pid);

    // set cart product
    const cartProduct = {
      cid: cid,
      pid: pid,
      aid: aid,
      iid: iid,
      count: 1,
      price: product.price,
      total: product.price,
    };

    const exist = this.state.cart.filter((item) => item.cid === cid);
    if (exist.length === 0) {
      const newCart = [...this.state.cart, cartProduct];
      localStorage.setItem("cart", JSON.stringify(newCart));
      this.setState({ cart: [...newCart] }, () => {
        this.addTotals();
        stepForward();
      });
    } else {
      alert("Aready in cart");
    }
  };

  handleDel = (user, id, collection, idType) => {
    alert(`Cart items that uses this ${collection} will be removed!`);
    const ref = db.collection("users").doc(user).collection(collection).doc(id);
    ref
      .delete()
      .then(() => {
        const currentCart = JSON.parse(localStorage.getItem("cart"));
        const newCart = currentCart.filter((item) => item[idType] !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        localStorage.removeItem("pid");
        localStorage.removeItem("iid");
        localStorage.removeItem("aid");
        this.setState({ cart: newCart });
        this.addTotals();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleDel: this.handleDel,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

const CartConsumer = CartContext.Consumer;

export { CartProvider, CartConsumer };
