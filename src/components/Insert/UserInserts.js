import React from 'react'
import { Link } from 'react-router-dom'

export default function UserInserts({ myInserts }) {

    return (
        <div className="pt-5">
            <h6>Your Saved Templates:</h6>
            {myInserts.map(insert =>
                <Link
                    key={insert.iName}
                    className="btn btn-sm btn-outline-secondary mr-3"
                    // params = pid & tid & templateName
                    to={"/address/" + insert.pid + "&" + insert.iid + "&" + insert.iName}
                >
                    {insert.iName}
                </Link>
            )
            }
        </div >
    )
}
