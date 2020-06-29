import React from "react"
import "./layout.css"
import Navbar from "./navbar"

export default function Layout({ children }) {
    return (
        <div className="application">
            <div className="layout">
                <Navbar />
                <div className="body">
                    {children}
                </div>
            </div>
        </div>
    )
}