import React from 'react'

import AddressForm from "../Address/AddressForm"
import AddressTable from "../Address/AddressTable"


export default function Factories({ user, adds, handleDel }) {

    return (
        <div className="mt-5">
            <AddressForm user={user} />
            <AddressTable adds={adds} handleDel={handleDel} type={"account"} />
        </div>
    )
}
