import React from "react"
import "./layout.css"
import Navbar from "./navbar"

export default function Layout({ children }) {
    return <div>
        <Navbar />
        {children}
    </div>
}