import React, { useState } from "react";
import { UserConsumer } from "../../contexts/UserContext";

import Title from "../Styled/Title";
import Inserts from "./Inserts";
import Factories from "./Factories";
import Orders from "./Orders";

export default function Account({ history }) {
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
  };

  return (
    <UserConsumer>
      {({ user, adds, orders, inserts, handleDel }) => (
        <section className="container">
          <Title title={`Hello,  ${user}`} />
          <div className="text-center">
            <button
              name="orders"
              className="btn font-weight-bold px-5"
              onClick={e => handleClick(e)}
            >
              Orders
            </button>{" "}
            |
            <button
              name="inserts"
              className="btn font-weight-bold px-5"
              onClick={e => handleClick(e)}
            >
              {" "}
              Inserts
            </button>{" "}
            |
            <button
              name="factories"
              className="btn font-weight-bold px-5"
              onClick={e => handleClick(e)}
            >
              {" "}
              Factories
            </button>
          </div>
          <hr />
          {show.orders === "show" && <Orders orders={orders} />}
          {show.inserts === "show" && (
            <Inserts
              inserts={inserts}
              handleDel={handleDel}
              history={history}
            />
          )}
          {show.factories === "show" && (
            <Factories user={user} adds={adds} handleDel={handleDel} />
          )}
        </section>
      )}
    </UserConsumer>
  );
}
