import React, { Component } from "react";
import { products, sampleTemplate } from "../data";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    sampleTemplate: sampleTemplate,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    paid: false
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

  getItem = id => {
    const product = this.state.products.find(item => item.pid === id);
    return product;
  };

  // handleDetail = id => {
  //   const product = this.getItem(id);
  //   this.setState({ detailProduct: product });
  // };

  addToCart = (id, history, content) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.content = content;
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.setState(
      {
        products: tempProducts,
        cart: [...this.state.cart, product]
      },
      () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
        this.addTotals();
        history.push("/cart");
      }
    );
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.pid === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count++;
    product.total = product.price * product.count;
    localStorage.setItem("cart", JSON.stringify(tempCart));
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
    this.addTotals();
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.pid === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count--;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;
      localStorage.setItem("cart", JSON.stringify(tempCart));
      this.setState({ cart: [...tempCart] });
      this.addTotals();
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = JSON.parse(localStorage.getItem("cart"));
    tempCart = tempCart.filter(item => item.pid !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    localStorage.setItem("cart", JSON.stringify(tempCart));
    this.setState({ cart: [...tempCart], products: [...tempProducts] });
    this.addTotals();
  };

  clearCart = () => {
    this.setState({ cart: [] });
    localStorage.removeItem("cart");
    this.setProducts();
    this.addTotals();
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
          // handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
