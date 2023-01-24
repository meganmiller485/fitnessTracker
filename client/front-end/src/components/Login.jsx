import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import PublicNavbar from "./PublicNavbar";


const Login = ({setToken, token}) => {

	function showAlert(){
		alert( "No user found, Please register first!") 
	}

	const navigate = useNavigate()
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const submitHandler = async (event) => {
		try {
			event.preventDefault();
			const token = await loginUser(username, password);

			setToken(token);
			localStorage.setItem("token", token);
		
			(!token ? showAlert(): 
			navigate("/myhome") )
		} catch (error) {
			console.error(error);
		}
    }
    return (
			<div className='logpage'>
				
				<h2 className="headers">Welcome back!</h2>
				<form className="usepassforms" onSubmit={submitHandler}>
					<label htmlFor='Username'></label>
					<input
						value={username}
						type={"text"}
						onChange={(event) => {
							setUsername(event.target.value);
						}}
						placeholder='username'
					></input>
					<label htmlFor='Password'></label>
					<input
						value={password}
						minLength={8}
						type={"password"}
						onChange={(event) => {
							setPassword(event.target.value);
						}}
						placeholder='password'
					></input>
					<button className="submits" type='submit'>log in</button>
				</form>
				<div className="backlinks">
					<p>Don't have an account? <span><NavLink to='/register' id='backlink'>Join us!</NavLink></span></p>
					<p>Go back to <span><NavLink to='/' id='backlink'>home</NavLink></span></p>
				</div>
			</div>
	);
}

export default Login;