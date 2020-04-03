import React, { useState } from "react";
import styled from "styled-components";
import PreviewModal from "../PreviewModal";

export default function Orders({ orders, history }) {
  const [show, setShow] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
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
      {orders.map(order => {
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
              {order.items.map(item => {
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
                          textDecoration: "underline"
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
                          textDecoration: "underline"
                        }}
                        onClick={() =>
                          alert(
                            `Address: ${item.add.address}\nContact: ${item.add.contact}, ${item.add.email}, ${item.add.mobile}`
                          )
                        }
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
