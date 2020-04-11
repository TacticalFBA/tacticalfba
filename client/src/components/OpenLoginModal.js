import { Component } from "react";
import { UserContext } from "../contexts/UserContext";

export default class OpenLoginModal extends Component {
  static contextType = UserContext;

  componentDidMount() {
    const { user, openModal } = this.context;
    if (!user) {
      openModal();
    }
  }

  render() {
    return null;
  }
}
