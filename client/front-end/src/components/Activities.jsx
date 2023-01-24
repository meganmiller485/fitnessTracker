import React from "react";
import PublicNavbar from "./PublicNavbar";
import MyNavbar from "./MyNavbar";
import AddNewAct from "./AddNewAct";


const Activities = ({allActivities, token}) => {
    return (
        <div className="routact-container">
            <div>
                {!token ? 
                <PublicNavbar /> : <MyNavbar /> }
            </div>
                 
            <h2 className="headers routact">Activities</h2>
            <p className="subtitle">Build out your routine with these <i>rad</i> activities!</p>
            
            {!token ? "" :
                <p className="creact">
                    <i className="cabcap">Already a pro?</i>
                    <button className='createbuttons cab'
                        onClick={() => {
                        location.pathname="/createAct"
                        }}>Create Activity
                    </button>
                </p>
            }
            <div className="allact">
                {allActivities.map((activity) => {
                    return (
                        <div className="single activity" key={activity.id}>
                            <div className="act-name">{activity.name}</div>
                            <div className="act-overlay">
                                <p className="act-desc">{activity.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Activities;