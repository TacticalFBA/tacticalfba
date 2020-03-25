import React from 'react'

import Progress from "../Progress";

import Title from "../Styled/Title"
import AddressForm from "./AddressForm"
import AddressTable from "./AddressTable"

export default function Address({ user, adds, addToCart, handleDel, history }) {

    return (
        <div className="container">
            <Progress page="address" history={history} />
            <Title title={"Factory Address"} />
            <AddressForm user={user} />
            <AddressTable user={user} adds={adds} history={history} addToCart={addToCart} handleDel={handleDel} type={"toCart"} />
        </div>

    )
}