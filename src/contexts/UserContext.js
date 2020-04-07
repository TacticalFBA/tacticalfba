import React, { Component } from "react";
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
    modalOpen: false,
  };

  componentDidMount() {
    this.authListener();
  }

  SignIn = () => {
    if (auth.isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      var url = window.localStorage.getItem("redirectTo");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      auth
        .signInWithEmailLink(email, window.location.href)
        .then(() => {
          if (url === "insert") {
            window.location = "/insert";
          }
          if (url === "account") {
            window.location = "/account";
          }
          window.localStorage.removeItem("emailForSignIn");
          window.localStorage.removeItem("redirectTo");
        })
        .catch((error) => {
          console.log(`sign in : ${error.code}`);
        });
    }
  };

  authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        const tempUser = email;
        this.setState({ user: tempUser }, () => {
          const p1 = this.syncAdd(email);
          const p2 = this.syncInsert(email);
          const p3 = this.syncOrder(email);
          Promise.all([p1, p2, p3]).then(() => {
            this.setState({ spin: false });
          });
        });
      } else {
        this.setState({ user: null });
        this.setState({ spin: false });
      }
    });
  };

  syncInsert = (user) => {
    const ref = db.collection("users").doc(user).collection("insert");
    ref.onSnapshot((snapshot) => {
      const inserts = snapshot.docs.map((doc) => {
        // adding document id to the data
        let tempDoc = doc.data();
        return (tempDoc = { ...tempDoc, iid: doc.id });
      });
      this.setState({ inserts });
      // console.log("tempReady");
    });
  };

  syncAdd = (user) => {
    if (user != null) {
      const ref = db.collection("users").doc(user).collection("factory");
      ref.onSnapshot((snapshot) => {
        const adds = snapshot.docs.map((doc) => {
          // adding document id to the data
          let tempDoc = doc.data();
          return (tempDoc = { ...tempDoc, aid: doc.id });
        });
        this.setState({ adds });
        // console.log("addReady");
      });
    }
    return;
  };

  syncOrder = (user) => {
    const ref = db
      .collection("users")
      .doc(user)
      .collection("order")
      .orderBy("timestamp", "desc");
    ref.onSnapshot((snapshot) => {
      const orders = snapshot.docs.map((doc) => {
        // adding document id to the data
        let tempDoc = doc.data();
        return (tempDoc = { ...tempDoc, oid: doc.id });
      });
      this.setState({ orders });
      // console.log("tempReady");
    });
  };

  // account start //
  openModal = (type) => {
    this.setState({
      modalOpen: true,
      type: type,
    });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  sendEmail = (email, redirect) => {
    auth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function () {
        // The link was successfully sent. Inform the user.
        alert("The sign-in link has been sent to your email address.");
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        window.localStorage.setItem("redirectTo", redirect);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  googleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        // var user = result.user;
        // ...
        this.closeModal();
      })
      .catch(function (error) {
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
  };

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
            cartTotal: 0,
          },
        });
      })
      .catch(function (error) {
        alert(error.message);
      });
  };
  // account end

  // cart manipulation start

  handleDel = (id, collection, idType) => {
    alert(`Cart items that uses this ${collection} will be removed!`);
    const ref = db
      .collection("users")
      .doc(this.state.user)
      .collection(collection)
      .doc(id);
    ref
      .delete()
      .then(() => {
        const currentCart = JSON.parse(localStorage.getItem("cart"));
        const newCart = currentCart.filter((item) => item[idType] !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
          //other fns
          handleDel: this.handleDel,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
