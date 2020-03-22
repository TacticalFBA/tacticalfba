import React from 'react'
import T1 from "./T1";
import T2 from "./T2";

export default function Preview({ pid, content, onSelect }) {

    switch (pid) {
        case 1:
            return (
                <T1
                    content={content}
                    onSelect={onSelect}
                />
            );
        case 2:
            return (
                <T2
                    content={content}
                    onSelect={onSelect}
                />
            );
        default:
            return (
                <div>Template not founded</div>
            );
    }
}
