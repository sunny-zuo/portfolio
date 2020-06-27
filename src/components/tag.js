import React from "react"

export default function Tag(props) {
    const colorArray = [
        ["web", "#a56def"],
        ["beginner", "#D81159"],
        ["sql", "#70C1B3"],
        ["xss", "#7d23ee"],
        ["xxe", "#256def"],
        ["lfi", "#bb342f"],
        ["json", "#ee7674"],
        ["misc", "#00af54"],
        ["osint", "#544e61"],
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