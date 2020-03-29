import React, { useState } from "react";
import styled from "styled-components";
import PreviewModal from "../PreviewModal";

export default function Orders({ orders }) {
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
  return (
    <div className="mt-5">
      {show && (
        <div onClick={closeModal}>
          <PreviewModal front={front} back={back} />
        </div>
      )}
      {orders.map(order => {
        return (
          <Wrapper key={order.oid}>
            <div className="header">
              <span>
                Submitted on: {order.info.date}, {order.info.time}
              </span>
              <span className="total">
                Order Total: $<strong>{order.info.total}</strong>
              </span>
            </div>
            <div className="body">
              {order.items.map(item => {
                return (
                  <div className="item" key={item.insert.iid}>
                    <div className="row">
                      <div className="col-2 title">Item:</div>
                      <div className="col-10">
                        <span
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline"
                          }}
                          onClick={() =>
                            handleClick(
                              item.insert.frontPre,
                              item.insert.backPre
                            )
                          }
                        >
                          {item.insert.iName}
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">Factory:</div>
                      <div className="col-10">
                        {item.add.factory}, {item.add.address},{" "}
                        {item.add.zipcode}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">Factory Contact:</div>
                      <div className="col-10">
                        {item.add.contact}, {item.add.email}, {item.add.mobile}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">Price:</div>
                      <div className="col-10">${item.price}</div>
                    </div>
                    <div className="row">
                      <div className="col-2 title">Count:</div>
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
