import React, { Component } from "react";
import styled from "styled-components";
import { UserConsumer } from "../../context";

export default class LoginModal extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <UserConsumer>
        {({ modalOpen, closeModal, signIn, register }) => {
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="model modal-content col-10 col-sm-8 col-md-6 col-lg-4">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Welcome to TacticalFBA
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span onClick={() => closeModal()}>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={e =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() =>
                        register(this.state.email, this.state.password)
                      }
                    >
                      Create account
                    </button>
                    <button
                      type="button"
                      className="btn btn-orange btn-sm"
                      onClick={() =>
                        signIn(this.state.email, this.state.password)
                      }
                    >
                      Login
                    </button>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </UserConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  z-index:9999;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
