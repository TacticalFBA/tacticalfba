import React, { Component } from "react";
import { UserConsumer } from "../contexts/UserContext";

export default class OpenLoginModal extends Component {
  renderModal(user, openModal) {
    if (!user) {
      openModal();
    }
  }
  render() {
    return (
      <UserConsumer>
        {({ user, openModal }) => {
          this.renderModal(user, openModal);
        }}
      </UserConsumer>
    );
  }
}
