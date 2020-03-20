import React from 'react'
import { UserConsumer } from "../../context/userContext"

import AddressForm from "../Address/AddressForm"

export default function Factories({ addList }) {

    return (
        <div className="mt-5">
            <AddressForm />
            {addList.map(add =>
                <div key={add.aid} className="row py-2">
                    <div className="col-6">
                        <h6 className="mb-3">{add.factory}: </h6>
                        <p>{add.address} ({add.zipcode})</p>
                        <p>{add.contact}, {add.email}, {add.mobile}</p>
                    </div>
                    <div className="col-2">
                        <UserConsumer>
                            {({ handleDel }) => <button className="btn btn-sm text-dark ml-3" onClick={() => handleDel(add.aid, "factory", "aid")}>Delete</button>}
                        </UserConsumer>
                    </div>
                </div>
            )}
        </div>
    )
}
