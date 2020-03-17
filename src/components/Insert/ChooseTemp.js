import React from 'react'
import { Link } from 'react-router-dom'

export default function ChooseTemp({ history }) {

    const templates = JSON.parse(localStorage.getItem("template"));

    return (
        <div className="pt-5">
            <h6>Exciting Template:</h6>
            {templates.map(template =>
                <Link
                    key={template.templateName}
                    className="btn btn-sm btn-outline-secondary mr-3"
                    to={"/address/" + template.templateName}
                >
                    {template.templateName}
                </Link>
            )
            }
        </div >
    )
}
