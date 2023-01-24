import { useState } from "react";
import React from "react";
import { registerUser } from "../api/auth";
import { NavLink, useNavigate } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";

const Register = ({ setToken }) => {
	
	function showAlert(){
		alert( "User already exists, please login!") 
	}

	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const submitHandler = async (event) => {
		event.preventDefault();

		//assign token (what we returned in our api call) to the username/password of the registered user
		const token = await registerUser(username, password);

		//set the local storage to that token
		localStorage.setItem("token", token);

		//pass the token created by the username/password to the set token function created in App
		setToken(token);
		
		(!token ? showAlert(): 
			navigate("/myhome") )
	};
	
	return (
		<div className='regpage'>
			{/* <PublicNavbar /> */}
			<h2 className="headers">Best. Decision. Ever.</h2>
			<form className="usepassforms" onSubmit={submitHandler}>
				<label htmlFor='Username'>enter your deets below</label>
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
					placeholder='password (8+ chars)'
				></input>
				<button type='submit'>register</button>
			</form>
			<div className="backlinks">
				<p>Already have an account? <span><NavLink to='/login' id='backlink'>Log in</NavLink></span></p>
				<p>Go back to <span><NavLink to='/' id='backlink'>home</NavLink></span></p>
			</div>
		</div>
	);
};

export default Register;
