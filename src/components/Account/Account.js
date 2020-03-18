import React, { useState } from "react";
import { UserConsumer } from "../../context/userContext";
import { FullPageContainer } from "../Styled/FullPageContainer"
import Templates from "./Templates";
import Factories from "./Factories";
import Orders from "./Orders";


export default function Account() {

  const [show, setShow] = useState({
    orders: "show",
    templates: "hide",
    factories: "hide"
  });

  const handleClick = e => {
    let tempShow = {
      orders: "hide",
      templates: "hide",
      factories: "hide"
    };
    tempShow[e.currentTarget.name] = "show";
    setShow(tempShow);
  }

  return (
    <section className="container pt-5">
      <UserConsumer>
        {({ user, addList }) => {
          if (user !== null) {
            return (
              <div className="pt-5">
                <h4>Hello, {user.email}</h4>
                <div className="pt-5">
                  <button
                    name="orders"
                    className="btn btn-lg px-5"
                    onClick={e => handleClick(e)}>Orders</button>
                  <button
                    name="templates"
                    className="btn btn-lg px-5"
                    onClick={e => handleClick(e)} > Templates</button>
                  <button
                    name="factories"
                    className="btn btn-lg px-5"
                    onClick={e => handleClick(e)}> Factories</button>
                </div>
                <hr />
                {show.orders === "show" && <Orders />}
                {show.templates === "show" && <Templates />}
                {show.factories === "show" && <Factories addList={addList} />}
              </div>
            );
          } else {
            return (
              <FullPageContainer className="juzhong">
                <h4>Loading...</h4>
              </FullPageContainer>
            )
          }
        }}
      </UserConsumer>
    </section >
  );
}
