import React from "react"
import { Link } from "gatsby";

export default function Tag(props) {
    const colorArray = [
        ["web", "#a56def"],
        ["beginner", "#6464c8"],
        ["sql", "#70C1B3"],
        ["xss", "#00af54"],
        ["xxe", "#256def"],
        ["lfi", "#646464"],
        ["json", "#eaa221"],
        ["misc", "#FE5D9F"],
        ["osint", "#166c4d"],
        ["jwt", "#5cc8ff"],
        ["crypto", "#DC143C"]
    ];
    const colorMap = new Map(colorArray);

    const tagStyle = {
        backgroundColor: colorMap.get(props.tag),
        color: "white",
        padding: "4px 10px",
        borderRadius: "24px",
        fontSize: "12px",
        fontFamily: "'Roboto', sans-serif"
    }

    if (props.location === "template") {
        return (
            <Link to={`/ctf-writeups/?tag=${props.tag}`} style={{ textDecoration: 'none' }}>
                <div className="tag">
                    <span style={tagStyle}>{props.tag}</span>
                </div>
            </Link>
        )
    }
    return (
        <div className="tag">
            <span style={tagStyle}>{props.tag}</span>
        </div>
    )
}