import React, { Component } from "react";
import { products } from "../data";
import { db, storage } from "../config/Firebase";

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
    // confirm delete
    window.confirm(`Cart items that uses this ${collection} will be removed!`);

    // get data ref
    const dataRef = db
      .collection("users")
      .doc(user)
      .collection(collection)
      .doc(id);

    const deleteData = () => {
      dataRef
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

    // deleting insert
    if (collection === "insert") {
      // get image arr
      dataRef
        .get()
        .then((doc) => {
          // console.log(doc.data());
          const data = doc.data();
          const arr = ["frontImg", "rearImg", "frontPre", "backPre"];
          const names = arr.map((item) => {
            // https://firebasestorage.googleapis.com/v0/b/tacticalfba-28b9b.appspot.com/o/images%2F3uctizd9sjo000?alt=media&token=8367a6ef-8185-4d32-bca9-d9669fa8d721
            const url = data[item];
            // goal:3uctizd9sjo000
            const split1 = url.split("images%2F")[1];
            const name = split1.split("?alt=")[0];
            return name;
          });

          // console.log(names);

          names.forEach((img) => {
            const imgRef = storage.ref(`images/${img}`);
            // Delete the file
            imgRef
              .delete()
              .then(() => {
                console.log(`${img} deleted`);
              })
              .then(() => deleteData())
              .catch((err) => {
                console.log(err.message);
              });
          });
        })
        .catch((err) => console.log(err.message));
    } else {
      deleteData();
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
