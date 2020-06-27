import React from "react";
import Tag from "./tag";
import "./tagHolder.css"

export default function tagHolder(props) {
    const Tags = props.tags.split(", ").map(tag => <li><Tag tag={tag} /> </li>)
    return (
        <div className="tags">
            <ul>
                {Tags}
            </ul>
        </div>
    )
}