import React from 'react'
import { Link } from 'react-router-dom'

export default function ChooseTemp({ history, myTemps }) {

    return (
        <div className="pt-5">
            <h6>Your Saved Templates:</h6>
            {myTemps.map(template =>
                <Link
                    key={template.templateName}
                    className="btn btn-sm btn-outline-secondary mr-3"
                    // params = pid & tid & templateName
                    to={"/address/" + template.pid + "&" + template.tid + "&" + template.templateName}
                >
                    {template.templateName}
                </Link>
            )
            }
        </div >
    )
}
