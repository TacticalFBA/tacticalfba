import React, { Component } from "react";
import { products, sampleTemplate } from "../data";


const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    sampleTemplate: sampleTemplate,
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
    this.addTotals();
  }

  setProducts = () => {
    let tempProducts = [];
    products.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({ products: tempProducts });
  };

  // getItem = id => {
  //   const product = this.state.products.find(item => item.pid === id);
  //   return product;
  // };



  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.cid === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count++;
    product.total = product.price * product.count;

    this.setState({ cart: [...tempCart] }, () => {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
      this.addTotals();
    });
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.cid === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count--;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;
      this.setState({ cart: [...tempCart] }, () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
        this.addTotals();
      });
    }
  };

  removeItem = cid => {
    let tempCart = [...this.state.cart].filter(item => item.cid !== cid);
    this.setState({ cart: [...tempCart] }, () => {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
      this.addTotals();
    });
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      localStorage.removeItem("cart");
      this.addTotals();
    });
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({ cartSubtotal: subTotal, cartTax: tax, cartTotal: total });
  };

  render() {
    return (
      <ProductContext.Provider
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
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
