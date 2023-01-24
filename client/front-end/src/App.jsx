import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Userhome from "./components/Userhome";
import Home from "./components/Home";
import { fetchMe } from "./api/auth";
import Routines from "./components/PublicRoutines";
import { fetchroutines } from "./api/routines";
import Activities from "./components/Activities";
import { fetchactivities } from "./api/activities";
import MyRoutines from "./components/MyRoutines";
import AddNewRoutine from "./components/AddNewRoutine";
import AddNewAct from "./components/AddNewAct";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});

	const [allRoutines, setAllRoutines] = useState([])
	const [allActivities, setAllActivities] = useState([])
	// console.log("all routines", allRoutines);
	// this use effect creates a function which grabs the api for the single user
	// and attaches it to the token,
	useEffect(() => {
		const getMe = async () => {
			const data = await fetchMe(token);
			setUser(data);
		};
		//if there is a token, run the getMe function and pull the user of token
		if (token) {
			getMe();
		}
		//everytime the token changes it will re run this api call
	}, [token]);
	
	useEffect(() => {
		const getAllRoutines = async () => {
			const data = await fetchroutines();
			setAllRoutines(data);
		};
		getAllRoutines();
	}, []);

	useEffect(() => {
		const getAllActivities = async () => {
			const data = await fetchactivities();
			setAllActivities(data);
			
		};
		getAllActivities();
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home token={ token } />}></Route>
				<Route path='/register' element={<Register setToken={setToken}/>} />
				<Route path='/login' element={<Login token={token} setToken={setToken}/>}></Route>
				<Route path='/myhome' element={<Userhome user={user} setToken={setToken} />}></Route>
				<Route path='/myroutines' element={<MyRoutines setAllActivities={setAllActivities} allActivities={allActivities}setAllRoutines={setAllRoutines} allRoutines={allRoutines} token = {token} user={user}/>}></Route>
				<Route path='/routines' element={<Routines setAllRoutines={setAllRoutines} allRoutines={allRoutines} token={token} user={user}/>}></Route>
				<Route path='/activities' element={<Activities setAllActivities={setAllActivities} allActivities={allActivities} token={token}/>}></Route>
				<Route path='/create' element={<AddNewRoutine setAllActivities={setAllActivities} allActivities={allActivities}setAllRoutines={setAllRoutines} allRoutines={allRoutines} token={token} user={user}/>}></Route>
				<Route path='/createAct' element={<AddNewAct setAllActivities={setAllActivities} allActivities={allActivities} token={token} user={user}/>}></Route>
			</Routes>
			
				
			
		</div>
	);
}

export default App;
