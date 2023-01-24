import React, {useState} from "react";
import { deleteRoutine } from "../api/routines";

const ModifyButtons = ({openEdit, handleEditButton, updatedRoutine, setRoutineToEdit, routine, routineId, setAllRoutines, allRoutines, token }) => {
    
    
    return (
        <div className="rout-info modbut">
            <button 
                onClick={() => {
                setRoutineToEdit(routine)
                handleEditButton()
                
                console.log("state of openEdit", openEdit)
            }}>Edit Routine</button>
            <button 
                onClick={async () => {
                const deletedRoutine = await deleteRoutine(routineId, token)
                setAllRoutines([...allRoutines.filter((routine) => routine.id !== routineId )])
                console.log("Deleted Routine", deletedRoutine)
            }}>Delete Routine</button>
        </div>
    )
}

export default ModifyButtons