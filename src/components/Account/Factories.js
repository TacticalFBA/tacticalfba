import React from 'react'
import { db } from "../../config/Firebase"

import AddressForm from "../Address/AddressForm"

export default function Factories({ addList }) {

    const handleDel = aid => {
        db.collection("address").doc(aid)
            .delete()
            .catch(err => {
                console.log(err.message);
            })
    }

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
                        <button className="btn btn-sm text-dark ml-3" onClick={() => handleDel(add.aid)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}
