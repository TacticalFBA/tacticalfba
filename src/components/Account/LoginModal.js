import React, { Component } from "react";
import styled from "styled-components";
import { UserConsumer } from "../../contexts/UserContext";
import { Box, Typography, TextField, Button, Divider } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Spinner from "../Spinner";

export default class LoginModal extends Component {
  state = {
    email: "",
    err: null,
    // spin: false,
  };
  onBlur = (e) => {
    const emailReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const emptyReg = /\S/;
    if (!emptyReg.test(e.target.value)) {
      this.setState({ err: "Enter an email" });
      return;
    }
    if (!emailReg.test(e.target.value)) {
      this.setState({ err: "Invalid email address" });
      return;
    }
    this.setState({ err: null });
  };
  handleClick = (sendEmail, type) => {
    if (this.state.err || this.state.email === "") {
      return;
    }
    sendEmail(this.state.email, window.location.pathname);
    this.setState({ email: "" });
  };

  render() {
    return (
      <UserConsumer>
        {({ type, modalOpen, closeModal, sendEmail, googleLogin, spin }) => {
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <Spinner spin={spin} />
                <div className="model modal-content col-10 col-sm-8 col-md-6 col-lg-4">
                  <div className="modal-header">
                    <h6 className="modal-title" id="exampleModalCenterTitle">
                      Welcome to TacticalFBA
                    </h6>
                    {window.location.pathname === "/" && (
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span onClick={() => closeModal()}>&times;</span>
                      </button>
                    )}
                    {window.location.pathname !== "/" && (
                      <Button
                        // color="primary"
                        size="small"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => (window.location.href = "/")}
                      >
                        Go back
                      </Button>
                    )}
                  </div>
                  <div className="modal-body">
                    <Box mb={2}>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        fullWidth
                        onClick={googleLogin}
                      >
                        Login with Google
                      </Button>
                    </Box>

                    <Divider light />
                    <Box color="text.secondary" mt={2} textAlign="center">
                      <Typography>or login with email</Typography>
                    </Box>

                    <Box my={2}>
                      <TextField
                        label="Email"
                        id="email"
                        required
                        variant="outlined"
                        size="small"
                        placeholder="hello@tacticalfba.com"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        fullWidth
                        onBlur={this.onBlur}
                        error={Boolean(this.state.err)}
                        helperText={this.state.err}
                      />
                    </Box>

                    <Button
                      variant="contained"
                      size="small"
                      fullWidth
                      onClick={() =>
                        this.handleClick(sendEmail, type, closeModal)
                      }
                    >
                      Send link
                    </Button>
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
  z-index: 9999;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
