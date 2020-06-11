import React from "react"
import Logo from "./logo"
import { Link } from "gatsby"
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navBar">
            <Link to="/"><Logo /></Link>
            <ul>
                <MenuItem to="/">Home</MenuItem>
                <li><a href="./resume.pdf">Resume</a></li>
                <MenuItem to="/ctf-writeups">CTF Writeups</MenuItem>
            </ul>
        </div>
    )
}

const MenuItem = props => (
    <Link to={props.to}><li>{props.children}</li></Link>
)