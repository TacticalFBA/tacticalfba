import React, { Component } from "react";
import styled from "styled-components";
import { UserConsumer } from "../../contexts/UserContext";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  makeStyles,
  Collapse,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import Spinner from "../Spinner";

export default class LoginModal extends Component {
  state = {
    email: "",
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
                      Welcome to TacticalFBA
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
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      fullWidth
                      onClick={googleLogin}
                    >
                      Login with Google
                    </Button>

                    <Box>
                      <TextField
                        label="Email"
                        id="email"
                        required
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        fullWidth
                        // onBlur={onBlur}
                        // error={Boolean(Err)}
                        // helperText={Err}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      fullWidth
                      onClick={() => sendEmail(this.state.email, type)}
                    >
                      Send link
                    </Button>
                    <p className="text-center text-muted">or</p>
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
