import React from "react";
import { UserConsumer } from "../../context/userContext";
import Templates from "./Templates";


export default function Account() {
  return (
    <section className="container pt-5">
      <UserConsumer>
        {({ user }) => {
          if (user !== null) {
            return (
              <div className="pt-5">
                <h4>hello {user.email}</h4>
                <Templates />
              </div>
            );
          }
        }}
      </UserConsumer>
    </section>
  );
}
