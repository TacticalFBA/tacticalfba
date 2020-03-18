import React from 'react'
import { ProductConsumer } from "../../context/productContext"

export default function AddItem({ add, match, history }) {
    const templateName = match.params.tempName;
    const { factory, address, zipcode, contact, email, mobile } = add;
    return (
        <ProductConsumer>
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
                            <button className="btn btn-sm text-orange" onClick={() => addToCart(history, templateName, add)}>Use</button>
                        </div>
                    </div>)
                }
            }
        </ProductConsumer>

    )
}
