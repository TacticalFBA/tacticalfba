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
          window.location.href = url;
          window.localStorage.removeItem("emailForSignIn");
          window.localStorage.removeItem("redirectTo");
        })
        .catch((error) => {
          alert(`sign in : ${error.message}`);
        });
    }
  };

  authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        const tempUser = email;
        this.setState({ user: tempUser }, () => {
          this.closeModal();
          const p1 = this.syncAdd(email);
          const p2 = this.syncInsert(email);
          const p3 = this.syncOrder(email);
          Promise.all([p1, p2, p3]).then(() => {
            this.setState({ spin: false });
          });
        });
      } else {
        this.setState({ user: null, spin: false }, () => {
          if (
            window.location.pathname === "/account" ||
            window.location.pathname === "/insert"
          ) {
            this.openModal();
          }
        });
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
    if (this.state.modalOpen === false) {
      this.setState({
        modalOpen: true,
        type: type,
      });
    }
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  sendEmail = (email, redirect) => {
    const realSend = () => {
      auth
        .sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          alert("The sign-in link has been sent to your email address.");
          this.setState({ spin: false });
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem("emailForSignIn", email);
          window.localStorage.setItem("redirectTo", redirect);
        })
        .catch(function (error) {
          alert(error.message);
        });
    };
    this.setState({ spin: true }, realSend.bind(this));
  };

  googleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        this.closeModal();
      })
      .catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  signOut = () => {
    auth
      .signOut()
      .then(() => {
        this.setState({
          adds: [],
          inserts: [],
          orders: [],
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
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
