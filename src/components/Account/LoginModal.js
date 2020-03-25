import React, { Component } from "react";
import styled from "styled-components";
import { UserConsumer } from "../../contexts/UserContext";

export default class LoginModal extends Component {
  state = {
    email: ""
  };

  render() {
    return (
      <UserConsumer>
        {({ type, modalOpen, closeModal, sendEmail, googleLogin }) => {
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="model modal-content col-10 col-sm-8 col-md-6 col-lg-4">
                  <div className="modal-header">
                    <h6 className="modal-title" id="exampleModalCenterTitle">
                      Login to TacticalFBA with your Email
                    </h6>
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
                    <button
                      type="button"
                      className="btn btn-orange btn-sm btn-block"
                      onClick={() =>
                        sendEmail(this.state.email, type)
                      }
                    >
                      Send link
                    </button>
                    <p className="text-center text-muted">or</p>
                    <button
                      type="button"
                      className="btn btn-orange btn-sm btn-block"
                      onClick={googleLogin}
                    >
                      Login with Google
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index:9999;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
