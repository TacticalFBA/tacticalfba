import React, { Component } from "react";
import { products, sampleTemplate } from "../data";
import { db } from "../config/Firebase"

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    sampleTemplate: sampleTemplate,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
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

  setUser = (user) => {
    let newsampleTemplate = Object.assign({}, sampleTemplate);
    newsampleTemplate.user = user;
    this.setState({ sampleTemplate, newsampleTemplate })
  }

  getItem = id => {
    const product = this.state.products.find(item => item.pid === id);
    return product;
  };

  addToCart = (history, tid, aid, factory) => {


    db.collection("templates")
      .get()
      .then(
        snapshot => {
          // get selected template
          const template = snapshot.docs.filter(doc => doc.id === tid)[0].data();

          const tempProduct = products.filter(product => product.pid === template.pid)[0]
          const price = tempProduct.price;
          const type = tempProduct.type;
          const name = tempProduct.name;

          //get random cid
          const createRandomId = () => {
            return (Math.random() * 10000000).toString(16).substr(0, 4) + '-' + (new Date()).getTime() + '-' + Math.random().toString().substr(2, 5);
          }

          const product = {
            cid: createRandomId(),
            type: type,
            name: name,
            tid: tid,
            templateName: template.templateName,
            aid: aid,
            factory: factory,
            inCart: true,
            count: 1,
            price: price,
            total: price
          };
          this.setState(
            {
              cart: [...this.state.cart, product]
            },
            () => {
              localStorage.setItem("cart", JSON.stringify(this.state.cart));
              this.addTotals();
              history.push("/cart");
            }
          );
        }
      )
      .catch(
        error => {
          console.log(error.message);
        }
      )
  };

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
