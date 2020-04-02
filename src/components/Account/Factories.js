import React from "react";

import NewAddressBtn from "./NewAddressBtn";
import AddressForm from "../Address/AddressForm";
import AddressTable from "../Address/AddressTable";

export default function Factories({ user, adds }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <NewAddressBtn handleClick={handleClick} show={show} />
      {show && <AddressForm user={user} />}
      <AddressTable user={user} adds={adds} type={"account"} />
    </div>
  );
}
