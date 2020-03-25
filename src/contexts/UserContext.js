import React, { Component } from "react";
import { products } from "../data";
import { auth, provider, actionCodeSettings, db } from "../config/Firebase";

const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    spin: true,
    type: "",
    user: null,
    adds: [],
    inserts: [],
    orders: [],
    cart: [],
    totalCart: {
      cartSubtotal: 0,
      cartTax: 0,
      cartTotal: 0
    },
    modalOpen: false,
  };

  componentDidMount() {
    this.authListener();
  }

  SignIn = () => {
    if (auth.isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem('emailForSignIn');
      var url = window.localStorage.getItem('redirectTo');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      auth.signInWithEmailLink(email, window.location.href)
        .then(result => {
          if (url === "new card") {
            window.location = '/new-card'
          }
          if (url === "account") {
            window.location = '/account'
          }
          window.localStorage.removeItem('emailForSignIn');
          window.localStorage.removeItem('redirectTo');
        })
        .catch(error => {
          console.log(`sign in : ${error.code}`);
        });
    }
  };

  authListener = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const email = user.email;
        const tempUser = email;
        this.setState({ user: tempUser });
        this.syncAdd(email);
        this.syncInsert(email);
        this.syncOrder(email);
        this.setState({ spin: false })
      } else {
        this.setState({ user: null });
        this.setState({ spin: false })
      }
    })
  }

  syncInsert = user => {
    const ref = db.collection("users").doc(user).collection("insert");
    ref.onSnapshot(snapshot => {
      const inserts = snapshot.docs.map(doc => {
        // adding document id to the data
        let tempDoc = doc.data();
        return tempDoc = { ...tempDoc, iid: doc.id };
      })
      this.setState({ inserts });
      // console.log("tempReady");
    })
  }

  syncAdd = user => {
    if (user != null) {
      const ref = db.collection("users").doc(user).collection("factory");
      ref.onSnapshot(snapshot => {
        const adds = snapshot.docs.map(doc => {
          // adding document id to the data
          let tempDoc = doc.data();
          return tempDoc = { ...tempDoc, aid: doc.id };
        })
        this.setState({ adds });
        // console.log("addReady");
      })
    }
    return;
  }

  syncOrder = user => {
    const ref = db.collection("users").doc(user).collection("order");
    ref.onSnapshot(snapshot => {
      const orders = snapshot.docs.map(doc => {
        // adding document id to the data
        let tempDoc = doc.data();
        return tempDoc = { ...tempDoc, oid: doc.id };
      })
      this.setState({ orders });
      // console.log("tempReady");
    })
  }

  // account start //
  openModal = (type) => {
    this.setState(
      {
        modalOpen: true,
        type: type
      }
    );
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  sendEmail = (email, redirect) => {
    auth.sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function () {
        // The link was successfully sent. Inform the user.
        alert("Go to your email to get the link")
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        window.localStorage.setItem('redirectTo', redirect);
      }).catch(function (error) {
        console.log(error.message);
      });
  };

  googleLogin = () => {

    auth.signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      // var user = result.user;
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => {
        this.setState({
          adds: [],
          insert: [],
          cart: [],
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

  // find cart Item
  getCartItem = cid => {
    const cartItem = this.state.cart.find(item => item.cid === cid);
    return cartItem;
  }


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
  }

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
  }

  removeItem = cid => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.cid !== cid);
    localStorage.setItem("cart", JSON.stringify(tempCart));
    this.setState({ cart: [...tempCart] }, () => {
      this.addTotals();
    });
  }

  addTotals = () => {
    let subTotal = 0;
    JSON.parse(localStorage.getItem("cart")).map(item => (subTotal += item.total));
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
    localStorage.setItem("cart", JSON.stringify([]));
    this.setState({
      cart: []
    }, () => {
      this.addTotals()
    })
  }

  // cart manipulation end




  addToCart = (aid, factory, history) => {

    const comb = JSON.parse(localStorage.getItem("comb"));
    const { pid, iid, iName } = comb;

    const tempProduct = products.find(product => product.pid === pid);
    const price = tempProduct.price;
    const type = tempProduct.type;
    const pName = tempProduct.name;
    const cid = iid + aid;

    // set cart product
    const product = {
      cid: cid,
      pid: pid,
      aid: aid,
      iid: iid,
      type: type,
      pName: pName,
      iName: iName,
      factory: factory,
      count: 1,
      price: price,
      total: price
    };


    const exist = this.state.cart.filter(item => item.cid === cid);
    if (exist.length === 0) {
      const newCart = [...this.state.cart, product]
      localStorage.setItem("cart", JSON.stringify(newCart))
      this.setState({ cart: [...newCart] }, () => {
        this.addTotals();
        localStorage.removeItem("comb")
        history.push("/cart");
      });
    } else {
      alert("Aready in cart");
    }

  };


  handleDel = (id, collection, idType) => {
    alert(`Cart items that uses this ${collection} will be removed!`);
    const ref = db.collection("users").doc(this.state.user).collection(collection).doc(id);
    ref.delete()
      .then(() => {
        const currentCart = JSON.parse(localStorage.getItem("cart"));
        const newCart = currentCart.filter(item => item[idType] !== id);
        localStorage.setItem("cart", newCart);
        this.setState({ cart: [...newCart] }, () => {
          this.addTotals();
        });
      })
      .catch(err => {
        console.log(err.message);
      })
  }


  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          // Signin fns
          openModal: this.openModal,
          closeModal: this.closeModal,
          sendEmail: this.sendEmail,
          SignIn: this.SignIn,
          signOut: this.signOut,
          googleLogin: this.googleLogin,
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
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };