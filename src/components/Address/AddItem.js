import React from 'react'
import { UserConsumer } from "../../context"

export default function AddItem({ add, match, history }) {

    // get address info
    const { aid, factory, address, zipcode, contact, email, mobile } = add;

    // get template info
    // params = pid & tid & templateName
    const tempInfo = match.params.tempInfo.split("&");
    // pid is a string!
    let [pid, tid, templateName] = tempInfo;
    // covert to number
    pid = parseInt(pid);


    return (
        <UserConsumer>
            {
                ({ addToCart }) => {
                    return (<div className="row my-2">
                        <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">Factory: </span>
                            {factory}
                        </div>
                        <div className="col-10 mx-auto col-lg-3">
                            <span className="d-lg-none">Address: </span>
                            {address}, {zipcode}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">Contact: </span>
                            {contact}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">Email: </span>
                            {email}
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">Mobile: </span>
                            {mobile}
                        </div>
                        <div className="col-10 mx-auto col-lg-1">
                            <button className="btn btn-sm text-orange"
                                onClick={() => addToCart(pid, tid, templateName, aid, factory, history)}>Use</button>
                        </div>
                    </div>)
                }
            }
        </UserConsumer>

    )
}
