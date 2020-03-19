import React from 'react'

export default function ImageUploader({ onSelectFile }) {
    return (

        <div className="mb-3">
            <input
                type="file"
                onChange={e => onSelectFile(e)} />
        </div>
    )
}
