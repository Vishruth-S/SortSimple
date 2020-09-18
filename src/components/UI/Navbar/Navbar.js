import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

import logo from '../../../Assets/img/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light mynav">
            <span className="navbar-brand" ><img className="nav-logo" alt="SortSimple_logo" src={logo} /></span>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                </ul>
                <span className="navbar-text float-left">
                    Made by <a href="https://vishruth-s.github.io/Me/">VS</a>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
