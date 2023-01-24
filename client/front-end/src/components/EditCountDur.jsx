import React, { useEffect, useState } from "react";
import { updateCountDur } from "../api/activities";

const EditCountDur = ({setUserActs, userActs, token, activity, setActivityToEdit, activityToEdit}) => {
    const [openform, setOpenForm] = useState(false)

    const handleOpenForm = () => {
        setOpenForm(!openform)
    }
    
    const [editCount, setEditCount] = useState(activityToEdit.count)
    const [editDuration, setEditDuration] = useState(activityToEdit.duration)
    const [editActivityId, setEditActivityId] = useState(activityToEdit.routineActivityId)

    useEffect(() => {
        setEditCount(activityToEdit.count)
        setEditDuration(activityToEdit.duration)
        setEditActivityId(activityToEdit.routineActivityId)
    }, [activityToEdit])
    
    const submitHandler = async (event) => {
        try {
            event.preventDefault()

            console.log("this is my activity to edit", activityToEdit)
            let updatedCountDur = async () => {
                await updateCountDur(token, activityToEdit.routineActivityId, editCount, editDuration)
            }
            updatedCountDur()
           


        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <div>
            <button onClick={()=>{
                handleOpenForm()
                console.log("this is my activity", activity)
                setActivityToEdit(activity)
            }}
            
            >Edit Count/Duration</button>
            {openform ? (
            <div>
                <form onSubmit={submitHandler}>
                    <label htmlFor="Duration">Duration: </label>
                    <input value={editDuration}
                    type={"text"}
                    onChange={(event)=> {
                        setEditDuration(event.target.value)
                    }}
                    placeholder="duration"></input>
                    <label htmlFor="Count">Count: </label>
                    <input
                    value={editCount}
                    type={"text"}
                    onChange={(event)=> {
                        setEditCount(event.target.value)
                    }}
                    placeholder="count"></input>
                    <button type={"submit"}>Edit</button>
                </form> 
            </div>) 
            : null}
        </div>
    )
}

export default EditCountDur