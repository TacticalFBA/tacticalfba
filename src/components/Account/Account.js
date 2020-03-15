import React from "react";
import { UserConsumer } from "../../context/userContext";
// import { TemplateConsumer } from "../../context/templateContext";

export default function Account() {
  return (
    <section>
      <UserConsumer>
        {({ user }) => {
          if (user !== null) {
            return (
              <React.Fragment>
                <h4>hello {user.email}</h4>
                <h4>Drafts</h4>
                <h4>Orders</h4>
              </React.Fragment>
            );
          }
        }}
      </UserConsumer>
    </section>
  );
}
