import React, { useState } from "react";
import { UserConsumer } from "../../context";
import Inserts from "./Inserts";
import Factories from "./Factories";
import Orders from "./Orders";


export default function Account() {

  const [show, setShow] = useState({
    orders: "show",
    inserts: "hide",
    factories: "hide"
  });

  const handleClick = e => {
    let tempShow = {
      orders: "hide",
      inserts: "hide",
      factories: "hide"
    };
    tempShow[e.currentTarget.name] = "show";
    setShow(tempShow);
  }

  return (
    <section className="container pt-5">
      <UserConsumer>
        {({ user, orders, adds, inserts }) => {
          if (user) {
            return (
              <div className="pt-5">
                <h4>Hello, {user}</h4>
                <div className="pt-5">
                  <button
                    name="orders"
                    className="btn btn-lg px-5"
                    onClick={e => handleClick(e)}>Orders</button> |
                  <button
                    name="inserts"
                    className="btn btn-lg px-5"
                    onClick={e => handleClick(e)} > Inserts</button> |
                  <button
                    name="factories"
                    className="btn btn-lg px-5"
                    onClick={e => handleClick(e)}> Factories</button>
                </div>
                <hr />
                {show.orders === "show" && <Orders orders={orders} />}
                {show.inserts === "show" && <Inserts inserts={inserts} />}
                {show.factories === "show" && <Factories adds={adds} />}
              </div>
            )
          }
        }}
      </UserConsumer>
    </section >
  );
}
