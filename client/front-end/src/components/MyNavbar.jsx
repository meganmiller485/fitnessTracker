import React from "react";
import {NavLink} from "react-router-dom"
import Logout from "./Logout";

const MyNavbar = ({setToken}) => {
    return(
        <header >
        <nav className='mynav'>
            <NavLink to='/myhome' className="navlink my">My Home</NavLink>
            <NavLink to="/routines" className="navlink my">Routines</NavLink>
            <NavLink to="/myroutines" className="navlink my">My Routines</NavLink>
            <NavLink to="/activities" className="navlink my">Activities</NavLink>
            <Logout setToken={setToken} />
        </nav>
        </header> 
    )
}

export default MyNavbar