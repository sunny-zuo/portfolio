import React from "react"
import Logo from "./logo"
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <div>
            <Link to="/"><Logo /></Link>
        </div>
    )
}