import React from "react"

export default function Tag(props) {
    const colorArray = [
        ["web", "#a56def"],
        ["beginner", "#6464c8"],
        ["sql", "#70C1B3"],
        ["xss", "#00af54"],
        ["xxe", "#256def"],
        ["lfi", "#646464"],
        ["json", "#166c4d"],
        ["misc", "#FE5D9F"],
        ["osint", "#eaa221"],
        ["jwt", "#5cc8ff"]
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
    return (
        <div className="tag">
            <span style={tagStyle}>{props.tag}</span>
        </div>
    )
}