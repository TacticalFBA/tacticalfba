import React from "react";
import { UserConsumer } from "../../contexts/UserContext";

import Progress from "../Progress";
import Title from "../Styled/Title";
import AddressForm from "./AddressForm";
import AddressTable from "./AddressTable";

export default function Address({ history }) {
  return (
    <UserConsumer>
      {({ user, adds, handleDel }) => {
        return (
          <div className="container">
            <Progress page="address" history={history} />
            <Title title={"Factory Address"} />
            <AddressForm user={user} />

            <AddressTable
              adds={adds}
              history={history}
              handleDel={handleDel}
              type={"toCart"}
            />
          </div>
        );
      }}
    </UserConsumer>
  );
}
