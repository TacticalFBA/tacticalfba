import React from 'react'

export default function ImageUploader({ onSelectImg, side }) {
    return (

        <div className="mb-3">
            <input
                type="file"
                name={side}
                onChange={e => onSelectImg(e)} />
        </div>
    )
}
