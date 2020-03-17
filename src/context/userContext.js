import React, { Component } from "react";
import { auth, db } from "../config/Firebase";

const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    user: null,
    addList: [],
    modalOpen: false
  };

  componentDidMount() {
    this.setUser();
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
        localStorage.setItem("uid", JSON.stringify(this.state.user.uid));
        this.synceAdd(uid);
      } else {
        this.setState({ user: null });
      }
    });
  };

  synceAdd = uid => {
    db.collection("address").where("uid", "==", uid)
      .onSnapshot(snapshot => {
        const addList = snapshot.docs.map(doc => {
          let temp = doc.data();
          return temp = { ...temp, aid: doc.id };
        })
        this.setState({ addList: addList })
      })
  }

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
        console.log("signed out");
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          openModal: this.openModal,
          closeModal: this.closeModal,
          signIn: this.signIn,
          register: this.register,
          signOut: this.signOut
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
