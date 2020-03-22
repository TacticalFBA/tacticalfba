import React from 'react'

export default function Alert({ show, error }) {
    return show ? (
        <div className="mb-3">
            <h6 className="text-danger">{error}</h6>
        </div>
    ) : null
}
