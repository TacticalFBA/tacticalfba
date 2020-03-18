import React from 'react'
import { Link } from "react-router-dom"

export default function Templates() {
    const templates = JSON.parse(localStorage.getItem("template"));
    return (
        <div className="mt-5">
            {templates.map(template =>
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
                        <button className="btn btn-sm text-dark ml-3">Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}
