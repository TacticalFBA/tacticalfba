import React, { useState } from 'react'
import { UserConsumer } from "../../context"
import { db } from "../../config/Firebase"

export default function AddressForm() {

    const [show, setShow] = useState(false)
    const showForm = () => {
        setShow(true)
    }

    const [add, setAdd] = useState({
        factory: "",
        address: "",
        zipcode: "",
        contact: "",
        email: "",
        mobile: ""
    });

    const handleInputChange = e => {
        let newAdd = Object.assign({}, add);
        newAdd[e.currentTarget.name] = e.currentTarget.value;
        setAdd(newAdd);
    };

    const saveAdd = (user) => {
        setShow(false);
        const newAdd = {
            factory: "",
            address: "",
            zipcode: "",
            contact: "",
            email: "",
            mobile: ""
        }
        setAdd(newAdd);
        const ref = db.collection("users").doc(user).collection("factory");
        ref.add(add)
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <button className="btn btn-sm btn-orange" onClick={showForm}>+ New Address</button>
            {show === true &&
                <form className="pt-3">
                    <div className="form-row">
                        {/* factory name can not be duplicate */}
                        <div className="form-group col-md-3">
                            <label htmlFor="factory">Factory Name</label>
                            <input type="text" className="form-control" name="factory" id="factory" value={add.factory} required onChange={e => handleInputChange(e)} />
                        </div>
                        {/* check if contains charators "省、市" */}
                        <div className="form-group col-md-7">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" name="address" id="address" value={add.address} required onChange={e => handleInputChange(e)} />
                        </div>
                        {/* check if its chinese zipcode */}
                        <div className="form-group col-md-2">
                            <label htmlFor="zipcode">Zipcode</label>
                            <input type="text" className="form-control" name="zipcode" id="zipcode" value={add.zipcode} required onChange={e => handleInputChange(e)} />
                        </div>

                    </div>
                    <div className="form-row">
                        {/* check if entered */}
                        <div className="form-group col-md-4">
                            <label htmlFor="contact">Contact Name</label>
                            <input type="text" className="form-control" name="contact" id="contact" value={add.contact} required onChange={e => handleInputChange(e)} />
                        </div>
                        {/* to add email validator */}
                        <div className="form-group col-md-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" id="mobile" value={add.email} required onChange={e => handleInputChange(e)} />
                        </div>
                        {/* to add mobile number validator */}
                        <div className="form-group col-md-4">
                            <label htmlFor="mobile">Mobile No.</label>
                            <input type="text" className="form-control" name="mobile" id="mobile" value={add.mobile} required onChange={e => handleInputChange(e)} />
                        </div>
                    </div>
                    <UserConsumer>
                        {({ user }) => (
                            <button type="button"
                                className="btn btn-sm btn-dark mt-3"
                                onClick={() => saveAdd(user)}>
                                Save</button>
                        )
                        }
                    </UserConsumer>

                </form>}
        </div >
    )
}
