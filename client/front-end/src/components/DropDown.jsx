import React, {useEffect, useState} from "react";
import {addActToRoutine} from "../api/activities"



const DropDown = ({userActs, setUserActs, token, setAllActivities, allActivities, routineId}) => {
    const [open, setOpen] = useState(false)
	const [openCount, setOpenCount] = useState(false)
    const [actObject, setActObject] = useState({})

    const [count, setCount] = useState("")
	const [duration, setDuration] = useState("")

	const [selectedAct, setSelectedAct] = useState("")

    // const [style, setStyle] = useState(null)

    
    //<--------DROP DOWN STUFF--------->
	

	const submitActHandler = async (event) => {
		console.log("Dropdown button works")
		console.log("this is my activitiy",)
		event.preventDefault();

		const activityToAdd = await addActToRoutine(
            token,
			routineId,
			actObject,
			count,
			duration
		);
        console.log("ACTIVITIES ADDED", activityToAdd)
        setUserActs([activityToAdd, ...userActs])

		const reloadMyRoutines = () => {
        	window.location.href = "/myroutines";
      		};
      	reloadMyRoutines();

        console.log("ALL ACTIVITIES HERE:", userActs)
			// location.reload()

	}

    const handleOpen = () => {
        setOpen(!open)
    }

	const handleOpenCount = () => {
		setOpenCount(!openCount)
	}

	const handleSend = (id) => {
        // console.log("ACTIVITY Clicked", id)
        setActObject(id)
	}

    return(
        <div className="dropdown">
				<button id="addactbutton" onClick={handleOpen}>Jazz it up with an activity!</button>
				{
					open ? (
                        <div>
						<ul>
                            {allActivities.map((activity)=> {
                                
								return (
                                    <li key={activity.id}>
										<span>{activity.name}</span>
										<button id="selectactbutton" onClick={(event) => {
                                        
                                        event.preventDefault()
										setSelectedAct(activity)
                                        handleSend(activity.id) 
                                        console.log("ACTIVITY SELECTED", selectedAct)
                                        handleOpenCount()
                                    }
                                     }>Select</button>
									 
									 </li>
                                )
                            })}
						</ul>
                        </div>
					) : null
				}{openCount ? (
				<div>
					<h2>Add {selectedAct.name} To Your Routine</h2>
				<form onSubmit={submitActHandler}>
				<label htmlFor="count">COUNT: </label>
				<input 
					value={count}
					type={"text"}
					onChange={(event) => {
						setCount(event.target.value);
					}}
					placeholder='count'
				></input>
				<label htmlFor="duration">DURATION: </label>
				<input value={duration}
					type={"text"}
					onChange={(event) => {
						setDuration(event.target.value);
					}}
					placeholder='duration'></input>
				<button type={"submit"}>Add Activity</button>
			    </form>
				</div>): null}
		</div>
    )
}

export default DropDown