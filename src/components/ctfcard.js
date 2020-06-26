import React from "react";
import { Link } from "gatsby"
import Tag from "../components/tag"
import "./ctfcard.css";

export default function CTFCard (props) {
    const Tags = props.tags.split(", ").map(tag => <li><Tag tag={tag} /> </li>)
    const formatPath = (ctf, title) => {
        return `/ctf-writeups/` +
            ctf.replace(/\s/g, "-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "") + "/" + // space -> dash, lowercase, remove non alphanumeric plus dash
            title.replace(/\s/g, "-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "")
    }

    return (
        <div className="ctfCard">
            <Link to={formatPath(props.ctf, props.title)} style={{ textDecoration: 'none' }}>
                <div className="cardContainer">
                    <h1>{props.title}</h1>
                    <h2>{props.ctf}</h2>
                    <h3>{props.date}</h3>
                    <div className="tags">
                        <ul>
                            {Tags}
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    )
}