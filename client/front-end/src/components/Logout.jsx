import React from "react";


const Logout = ({setToken}) => {
    return (
        <button type="button" className="logoutbutton" onClick={() => {
            localStorage.removeItem('token');
           
            console.log("token removed", localStorage)
            location.pathname = "/";
        }}>Log Out</button>
    )
}

export default Logout;