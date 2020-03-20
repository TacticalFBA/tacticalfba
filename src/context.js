import React, { Component } from "react";
import { auth, db } from "./config/Firebase";
import { products } from "./data"

const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    loaded: false,
    user: null,
    addList: [],
    tempList: [],
    orderList: [],
    cartList: [],
    totalCart: {
      cartSubtotal: 0,
      cartTax: 0,
      cartTotal: 0
    },
    modalOpen: false
  };

  componentDidMount() {
    this.setUser();
    this.setState({ loaded: true })
  }

  setUser = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const tempUser = {
          uid: uid,
          email: email
        };
        this.setState({ user: tempUser });
        this.syncTemp(uid);
        this.syncAdd(uid);
        this.syncOrder(uid);
      } else {
        this.setState({ user: null });
      }
    })
  };

  syncAdd = uid => {
    const ref = db.collection("users").doc(uid).collection("factory");
    ref.onSnapshot(snapshot => {
      const addList = snapshot.docs.map(doc => {
        // adding document id to the data
        let tempDoc = doc.data();
        return tempDoc = { ...tempDoc, aid: doc.id };
      })
      this.setState({ addList })
      // console.log("addReady");
    })
  }

  syncTemp = uid => {
    const ref = db.collection("users").doc(uid).collection("template");
    ref.onSnapshot(snapshot => {
      const tempList = snapshot.docs.map(doc => {
        // adding document id to the data
        let tempDoc = doc.data();
        return tempDoc = { ...tempDoc, tid: doc.id };
      })
      this.setState({ tempList });
      // console.log("tempReady");
    })
  }

  syncOrder = uid => {
    const ref = db.collection("users").doc(uid).collection("order");
    ref.onSnapshot(snapshot => {
      const orderList = snapshot.docs.map(doc => {
        // adding document id to the data
        let tempDoc = doc.data();
        return tempDoc = { ...tempDoc, oid: doc.id };
      })
      this.setState({ orderList });
      // console.log("tempReady");
    })
  }

  // account start //
  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.closeModal();
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  register = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("account created");
        this.closeModal();
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  signOut = () => {
    auth
      .signOut()
      .then(() => {
        this.setState({
          addList: [],
          tempList: [],
          cartList: [],
          totalCart: {
            cartSubtotal: 0,
            cartTax: 0,
            cartTotal: 0
          }
        })
      })
      .catch(function (error) {
        alert(error.message);
      });
  };
  // account end

  // cart manipulation start

  addToCart = (pid, tid, templateName, aid, factory, history) => {

    const tempProduct = products.find(product => product.pid === pid);
    const price = tempProduct.price;
    const type = tempProduct.type;
    const name = tempProduct.name;
    const cid = Number(Math.random().toString().substr(3, 10) + Date.now()).toString(36);


    const currentCart = this.state.cartList;
    const exist = currentCart.filter(item => item.cid === cid)

    if (exist.length === 0) {
      // set cart product
      const product = {
        cid: cid,
        aid: aid,
        tid: tid,
        type: type,
        name: name,
        templateName: templateName,
        factory: factory,
        count: 1,
        price: price,
        total: price
      };
      this.setState({ cartList: [...currentCart, product] }, () => {
        this.addTotals();
        history.push("/cart");
      });
    } else {
      alert("Aready in cart");
    }
  };

  // find cart Item
  getCartItem = cid => {
    const cartItem = this.state.cartList.find(item => item.cid === cid);
    return cartItem;
  }

  increment = cid => {
    let tempCart = [...this.state.cartList];
    const cartItem = this.getCartItem(cid);
    const index = tempCart.indexOf(cartItem);
    const product = tempCart[index];
    product.count++;
    product.total = product.price * product.count;
    this.setState({ cartList: [...tempCart] });
    this.addTotals();
  }

  decrement = cid => {
    let tempCart = [...this.state.cartList];
    const cartItem = this.getCartItem(cid);
    const index = tempCart.indexOf(cartItem);
    const product = tempCart[index];
    product.count--;
    if (product.count === 0) {
      this.removeItem(cid);
    } else {
      product.total = product.price * product.count;
      this.setState({ cartList: [...tempCart] });
      this.addTotals();
    }
  }

  removeItem = cid => {
    let tempCart = [...this.state.cartList];
    tempCart = tempCart.filter(item => item.cid !== cid);
    this.setState({ cartList: [...tempCart] }, () => {
      this.addTotals();
    });
  }

  addTotals = () => {
    let subTotal = 0;
    this.state.cartList.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      totalCart: {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }

  clearCart = () => {
    this.setState({
      cartList: []
    }, () => {
      this.addTotals()
    })
  }

  // cart manipulation end


  handleDel = (id, collection, idType) => {
    alert(`Cart items that uses this ${collection} will be removed!`);
    const ref = db.collection("users").doc(this.state.user.uid).collection(collection).doc(id);
    ref.delete()
      .then(() => {
        const currentCart = this.state.cartList;
        const newCart = currentCart.filter(item => item[idType] !== id);
        this.setState({ cartList: newCart })
      })
      .catch(err => {
        console.log(err.message);
      })
  }


  render() {
    return (
      <div>
        {
          this.state.loaded ?
            (<UserContext.Provider
              value={{
                ...this.state,
                // Signin fns
                openModal: this.openModal,
                closeModal: this.closeModal,
                signIn: this.signIn,
                register: this.register,
                signOut: this.signOut,
                // cart manipulation fns
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                //other fns
                handleDel: this.handleDel,
              }}
            >
              {this.props.children}
            </UserContext.Provider>) : (<div>Loading...</div>)
        }
      </div>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
