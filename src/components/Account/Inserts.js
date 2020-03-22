import React from 'react'
import { Link } from "react-router-dom"
import { UserConsumer } from "../../context"

export default function Templates({ inserts }) {

    return (
        <div className="mt-5">

            {inserts.length === 0 && (
                <div>
                    <Link to="/insert" className="btn btn-sm btn-orange">+ Create Your Insert</Link>
                </div>
            )}

            {inserts.length > 0 && (<div>
                {
                    inserts.map(insert =>
                        <div key={insert.iName} className="row py-2">
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                {insert.iName}
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4">
                                <Link
                                    className="btn btn-sm text-dark ml-5"
                                    // params = pid & tid & templateName
                                    to={"/address/" + insert.pid + "&" + insert.iid + "&" + insert.iName}
                                >Use</Link>
                                {/* <button className="btn btn-sm text-dark ml-3">Edit</button> */}
                                <UserConsumer>
                                    {({ handleDel }) =>
                                        <button
                                            className="btn btn-sm text-dark ml-3"
                                            onClick={() => handleDel(insert.iid, "insert", "iid")}>
                                            Delete</button>}
                                </UserConsumer>
                            </div>
                        </div>)
                }
            </div>)}

        </div>
    )
}