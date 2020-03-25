import React, { useState } from 'react'
import { db } from "../../config/Firebase";
import { validation } from "./AddValidation"

export default function AddressForm({ user }) {

    const [show, setShow] = useState(false);

    const [add, setAdd] = useState({
        factory: "",
        address: "",
        zipcode: "",
        contact: "",
        email: "",
        mobile: ""
    });

    const handleClick = () => {
        setShow(!show);
    }

    const handleInputChange = e => {
        let newAdd = Object.assign({}, add);
        newAdd[e.currentTarget.name] = e.currentTarget.value;
        setAdd(newAdd);
    };

    const saveAdd = (error) => {

        let count = 0;
        for (const key in add) {
            if (add[key].trim() !== "") count++;
        }

        if (Object.keys(error).length === 0 && count === 6) {
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
    }

    const [error, setError] = useState({});

    const checkValid = e => {
        const field = e.target.name;
        const value = e.target.value.trim();
        const target = validation.filter(item => item.field === field)[0];
        const tempError = Object.assign({}, error);

        for (let i = 0; i < target.checkList.length; i++) {
            if (!target.checkList[i].rule.test(value)) {
                tempError[field] = target.checkList[i].message;
                setError(tempError);
                return;
            } else {
                delete tempError[field];
                setError(tempError);
            }
        }
    }

    return (
        <div className="mb-5">
            <button
                className="btn btn-sm text-orange font-weight-bold"
                onClick={handleClick}>
                {show ? " - Close Form" : " + New Address"}
            </button>
            {show === true &&
                <form className="pt-5">
                    <div className="form-row">
                        {/* factory name can not be duplicate */}
                        <div className="form-group col-md-3">
                            <label htmlFor="factory">Factory Name</label>
                            <input type="text" className="form-control" name="factory" id="factory"
                                value={add.factory}
                                onBlur={e => checkValid(e)}
                                onChange={e => handleInputChange(e)} />
                            {<small className="text-orange">{('factory' in error) ? error["factory"] : null}</small>}
                        </div>
                        {/* check if contains charators "省、市" */}
                        <div className="form-group col-md-7">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" name="address" id="address"
                                value={add.address} onBlur={e => checkValid(e)} onChange={e => handleInputChange(e)} />
                            {<small className="text-orange">{('address' in error) ? error["address"] : null}</small>}
                        </div>
                        {/* check if its chinese zipcode */}
                        <div className="form-group col-md-2">
                            <label htmlFor="zipcode">Zipcode</label>
                            <input type="text" className="form-control" name="zipcode" id="zipcode" value={add.zipcode} onBlur={e => checkValid(e)} onChange={e => handleInputChange(e)} />
                            {<small className="text-orange">{('zipcode' in error) ? error["zipcode"] : null}</small>}
                        </div>

                    </div>
                    <div className="form-row">
                        {/* check if entered */}
                        <div className="form-group col-md-4">
                            <label htmlFor="contact">Contact Name</label>
                            <input type="text" className="form-control" name="contact" id="contact" value={add.contact} onBlur={e => checkValid(e)} onChange={e => handleInputChange(e)} />
                            {<small className="text-orange">{('contact' in error) ? error["contact"] : null}</small>}
                        </div>
                        {/* to add email validator */}
                        <div className="form-group col-md-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" id="email" value={add.email} onBlur={e => checkValid(e)} onChange={e => handleInputChange(e)} />
                            {<small className="text-orange">{('email' in error) ? error["email"] : null}</small>}
                        </div>
                        {/* to add mobile number validator */}
                        <div className="form-group col-md-4">
                            <label htmlFor="mobile">Mobile No.</label>
                            <input type="text" className="form-control" name="mobile" id="mobile" value={add.mobile} onBlur={e => checkValid(e)} onChange={e => handleInputChange(e)} />
                            {<small className="text-orange">{('mobile' in error) ? error["mobile"] : null}</small>}
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-sm btn-orange mt-3"
                        onClick={() => saveAdd(error)}>
                        Save</button>
                </form>}
        </div >
    )
}
