import React from "react";
import { deleteActivityFromRoutine } from "../api/activities";

const DeleteAct = ({actId, setAllActivities, allActivities, token}) => {
    
    return (
        <div>
            <button id="removeactbutton" onClick={async()=>{
                console.log("this is my activity id", actId)
                const deleteMyAct = await deleteActivityFromRoutine(actId, token)

                const reloadMyRoutines = () => {
                    window.location.href = "/myroutines";
                      };
                reloadMyRoutines();

               
                console.log("this is my activity to delete", deleteMyAct)
            }} >Remove Activity from Routine</button>
        </div>
    )
}

export default DeleteAct;