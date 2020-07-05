import React from "react"
import Logo from "./logo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navShown: false
        }
    }

    toggleNav() {
        this.setState({ navShown: !(this.state.navShown)});
    }

    render() {
        return (
            <div className="navBar">
                <Link to="/"><Logo /></Link>
                <button onClick={() => this.toggleNav()}>
                        <FontAwesomeIcon icon={faBars} size="2x" />
                </button>
                <div className={this.state.navShown ? "navItems open" : "navItems"}>
                    <ul>
                        <MenuItem to="/">Home</MenuItem>
                        <MenuItem to="/ctf-writeups">CTF Writeups</MenuItem>
                    </ul>
                </div>
            </div>
        )
    }
}


const MenuItem = props => (
    <Link to={props.to}><li>{props.children}</li></Link>
)

export default Navbar;