import React from "react"
import "./tag.css"

export default function Tag(props) {
    return (
        <div className="tag">
            <span>{props.tag}</span>
        </div>
    )
}