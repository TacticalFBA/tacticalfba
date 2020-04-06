import React, { Component } from "react";
import { db } from "../../config/Firebase";

const PostContext = React.createContext();

class PostProvider extends Component {
  state = {
    posts: {},
  };

  componentDidMount() {
    this.syncPosts();
  }

  syncPosts = () => {
    const ref = db.collection("blog posts");
    ref.onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        // adding document id to the data
        let tempDoc = doc.data();
        tempDoc.date = tempDoc.timestamp.toDate().toString();
        return (tempDoc = { ...tempDoc, bid: doc.id });
      });
      this.setState({ posts });
    });
  };

  render() {
    return (
      <PostContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}

const PostConsumer = PostContext.Consumer;

export { PostProvider, PostConsumer };
