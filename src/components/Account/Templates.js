import React from 'react'
import { Link } from "react-router-dom"
import { UserConsumer } from "../../context/userContext"

export default function Templates({ tempList }) {

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
                                    // params = pid & tid & templateName
                                    to={"/address/" + template.pid + "&" + template.tid + "&" + template.templateName}
                                >Use</Link>
                                {/* <button className="btn btn-sm text-dark ml-3">Edit</button> */}
                                <UserConsumer>
                                    {({ handleDel }) =>
                                        <button
                                            className="btn btn-sm text-dark ml-3"
                                            onClick={() => handleDel(template.tid, "template", "tid")}>
                                            Delete</button>}
                                </UserConsumer>
                            </div>
                        </div>)
                }
            </div>)}

        </div>
    )
}
