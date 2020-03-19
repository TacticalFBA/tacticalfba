import React from 'react'
import { Link } from "react-router-dom"
import { db } from "../../config/Firebase"

export default function Templates({ tempList }) {

    const handleDel = tid => {
        db.collection("templates").doc(tid)
            .delete()
            .then(() => {
                // remove cart item that uses this template
                const cart = JSON.parse(localStorage.getItem("cart"))
                const newCart = cart.filter(item => item.tid !== tid);
                localStorage.setItem("cart", JSON.stringify(newCart));
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="mt-5">

            {tempList.length === 0 && (
                <div>
                    <p>No template yet...</p>
                    <Link to="/new-card" className="btn btn-sm btn-primary">Get Started</Link>
                </div>
            )}

            {tempList.length > 0 && (<div>
                {
                    tempList.map(template =>
                        <div key={template.templateName} className="row py-2">
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                {template.templateName}
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4">
                                <Link
                                    className="btn btn-sm text-dark ml-5"
                                    to={"/address/" + template.templateName}
                                >Use</Link>
                                <button className="btn btn-sm text-dark ml-3">Edit</button>
                                <button className="btn btn-sm text-dark ml-3" onClick={() => handleDel(template.tid)}>Delete</button>
                            </div>
                        </div>)
                }
            </div>)}

        </div>
    )
}
