import React from "react";
import { NavLink } from "react-router-dom";

const PublicNavbar = () => {
    return(
        <header >
        <nav className="publicnav">
            <NavLink to='/' className="navlink fitnesshome">Fitness Trac.kr</NavLink>
            <NavLink to='/routines' className="navlink">Routines</NavLink>
            <NavLink to='/activities' className="navlink">Activities</NavLink>
        </nav>
        </header>
    )
}

export default PublicNavbar