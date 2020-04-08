import React from "react";

import NewAddressBtn from "./NewAddressBtn";
import AddForm from "../Address/AddForm";
import AddressTable from "../Address/AddressTable";
import Box from "@material-ui/core/Box";

export default function Factories({ user, adds }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <NewAddressBtn handleClick={handleClick} show={show} />
      <Box mb={2}>{show && <AddForm user={user} />}</Box>
      <AddressTable user={user} adds={adds} type={"account"} />
    </div>
  );
}
