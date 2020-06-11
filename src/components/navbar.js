import React from "react"
import Logo from "./logo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navBar">
            <Link to="/"><Logo /></Link>
            <ul>
                <MenuItem to="/">Home</MenuItem>
                <a href="./resume.pdf"><li>Resume</li></a>
                <MenuItem to="/ctf-writeups">CTF Writeups</MenuItem>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </ul>
        </div>
    )
}

const MenuItem = props => (
    <Link to={props.to}><li>{props.children}</li></Link>
)