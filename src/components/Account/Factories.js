import React from "react";

import NewAddressBtn from "./NewAddressBtn";
import AddressForm from "../Address/AddressForm";
import AddressTable from "../Address/AddressTable";

export default function Factories({ user, adds, handleDel }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <NewAddressBtn handleClick={handleClick} show={show} />
      {show && <AddressForm user={user} />}
      <AddressTable adds={adds} handleDel={handleDel} type={"account"} />
    </div>
  );
}
