import React from "react"
import "./layout.css"
import Navbar from "./navbar"

export default function Layout({ children }) {
    return <div className="layout">
        <Navbar />
        {children}
    </div>
}