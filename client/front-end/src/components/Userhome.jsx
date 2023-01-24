import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import MyNavbar from "./MyNavbar";

const Userhome =({setToken, user}) => {
    
    
    return(
        <div className="userhome">
             <header> 
				<MyNavbar setToken={setToken} />
			</header>
            <h2 className="headers welcomeuser">Hiya, {user.username}!</h2><hr/>
            <h3 className="dash">Dashboard</h3><hr /><br/><br/>
            <div className="dashcont">
            <h4 className="dash per-in">Personal Information</h4>
            <div id="personalinfo">
                <img className="profpic" src="https://i.gifer.com/origin/3c/3c2d6c9ba2deaf0f42a1b4e07acd4ff8_w200.gif" />  
                <div className="sub">    
                    <p>First Name: Arnold </p>
                    <p>Last Name: Schwarzenegger</p>
                    <p>Birth Date: July 30, 1947</p>
                    <p>Email: arniebigarms@gmail.com</p>
                    <p>Mobile Number: Not specified</p>
                </div>
            </div>
            
            <h4 className="dash acc-in">Account Information</h4>
            <div id="accountinfo">
                <p>Username: {user.username}</p>
                <p>User Since: 1985 </p>
            </div>
            
            <h4 className="dash per-go">Personal Goals!</h4>
            <div id="personalgoals">
                <div id="goal">
                    <p>Goal Title: Jan 2023</p>
                    <p>Description: I want to be working out at least three times a week for 6 months.</p>
                    <p>Ideal Completion Date: June 2023</p>
                    <span>Completed?<input type="checkbox"></input></span>
                </div>
                <div id="goal">
                    <p>Goal Title: Feb 2023</p>
                    <p>Description: Eating healthier and taking my vitamins everyday! I would like to have a healthy eating streak of 2 weeks.</p>
                    <p>Ideal Completion Date: Jan 29, 2023</p>
                    <span>Completed?<input type="checkbox"></input></span>
                </div>
            </div>
            <div className="dash spoti">
                <h4>Spotify Playlists:</h4>
                <div className="sub">Add your Workout Playlist Here!!</div><br/>
            </div><hr />
            <div className="dash yt">
                <h4>YouTube Playlists:</h4>
                <div className="sub">Got some vids?</div>
                </div>
            </div>
        </div>
    )
}

export default Userhome