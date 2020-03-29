import React, { Component } from "react";
import { products } from "../data";

const CartContext = React.createContext();

class CartProvider extends Component {
  state = {
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    if (localStorage.getItem("cart")) {
      this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
      this.addTotals();
    }
  }

  // find cart Item
  getCartItem = cid => {
    const cartItem = this.state.cart.find(item => item.cid === cid);
    return cartItem;
  };

  increment = cid => {
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

  decrement = cid => {
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

  removeItem = cid => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.cid !== cid);
    localStorage.setItem("cart", JSON.stringify(tempCart));
    this.setState({ cart: [...tempCart] }, () => {
      this.addTotals();
    });
  };

  addTotals = () => {
    let subTotal = 0;
    JSON.parse(localStorage.getItem("cart")).map(
      item => (subTotal += item.total)
    );
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      cartSubtotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  };

  clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
      }
    );
  };

  // cart manipulation end

  addToCart = history => {
    const comb = JSON.parse(localStorage.getItem("comb"));
    const { pid, iid, aid } = comb;
    const cid = iid + "&" + aid;

    const product = products.find(product => product.pid === pid);

    // set cart product
    const cartProduct = {
      cid: cid,
      pid: pid,
      aid: aid,
      iid: iid,
      count: 1,
      price: product.price,
      total: product.price
    };

    const exist = this.state.cart.filter(item => item.cid === cid);
    if (exist.length === 0) {
      const newCart = [...this.state.cart, cartProduct];
      localStorage.setItem("cart", JSON.stringify(newCart));
      this.setState({ cart: [...newCart] }, () => {
        this.addTotals();
        localStorage.removeItem("comb");
        history.push("/cart");
      });
    } else {
      alert("Aready in cart");
    }
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
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

const CartConsumer = CartContext.Consumer;

export { CartProvider, CartConsumer };
