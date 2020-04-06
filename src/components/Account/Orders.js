import React, { useState } from "react";
import styled from "styled-components";
import PreviewModal from "../PreviewModal";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Orders({ orders, history }) {
  const [show, setShow] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState("");

  const handleClickOpen = (add) => {
    setAdd(add);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (front, back) => {
    setShow(true);
    setFront(front);
    setBack(back);
  };
  const closeModal = () => {
    setShow(false);
    setFront("");
    setBack("");
  };
  return orders.length > 0 ? (
    <div>
      {show && (
        <div onClick={closeModal}>
          <PreviewModal front={front} back={back} />
        </div>
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Typography color="primary" variant="h6">
            Factory Information
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box>Address: {add.address}</Box>
            <Box>Contact: {add.contact}</Box>
            <Box>Email: {add.email}</Box>
            <Box> Mobile: {add.mobile}</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {orders.map((order) => {
        return (
          <Wrapper key={order.oid}>
            <div className="header">
              <span>Order ID: {order.oid} </span>
              <span className="mx-2">|</span>
              <span> Submitted on: {order.info.date}</span>
              <span className="total">
                Order Total: $<strong>{order.info.total}</strong>
              </span>
            </div>
            <div className="body">
              {order.items.map((item) => {
                return (
                  <div className="item" key={item.insert.iid}>
                    <div className="row">
                      <div className="col-2 title">Product Category:</div>
                      <div className="col-10">
                        {item.pid === 0 || 1 || 2
                          ? "Package Insert"
                          : "Other Product"}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">
                        {item.pid === 0 || 1 || 2 ? "Insert" : "Other"} Name:
                      </div>
                      <div
                        className="col-10"
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() =>
                          handleClick(item.insert.frontPre, item.insert.backPre)
                        }
                      >
                        {item.insert.iName}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">Factory Name:</div>
                      <div
                        className="col-10"
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() => handleClickOpen(item.add)}
                        // onClick={() =>
                        //   alert(
                        //     `Address: ${item.add.address}\nContact: ${item.add.contact}, ${item.add.email}, ${item.add.mobile}`
                        //   )
                        // }
                      >
                        {item.add.factory}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">Price:</div>
                      <div className="col-10">${item.price}</div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">
                        Quantity<small> (in thousands) </small>:
                      </div>
                      <div className="col-10 ">{item.count}</div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">Total:</div>
                      <div className="col-10">${item.total}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Wrapper>
        );
      })}
    </div>
  ) : (
    <div style={{ height: "200px" }} className="juzhong">
      <div>You haven't placed any order yet.</div>
    </div>
  );
}

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-bottom: none;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .header {
    background: #d3d3d3;
    position: relative;
    border-bottom: 1px solid #ccc;
    padding: 0.6rem 1rem;
    .total {
      position: absolute;
      right: 1rem;
    }
  }
  .body {
    .item {
      border-bottom: 1px solid #ccc;
      padding: 0.6rem 1rem;
      .title {
        font-weight: 700;
      }
    }
  }
`;
