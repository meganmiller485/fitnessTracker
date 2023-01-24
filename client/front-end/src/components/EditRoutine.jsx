import React, {useState, useEffect} from "react";
import { updateRoutine } from "../api/routines";

const EditRoutine = ({ setAllRoutines, allRoutines, routineToEdit, token}) => {
    
	
	
	const [editName, setEditName] =  useState(routineToEdit.name)
    const [editGoal, setEditGoal] = useState(routineToEdit.goal)
    const [editRoutineId, setEditRoutineId] = useState(routineToEdit.id)
	
	useEffect(() => {
		setEditName(routineToEdit.name);
		setEditGoal(routineToEdit.goal);
		setEditRoutineId(routineToEdit.id)
	}, [routineToEdit]);

	const submitHandler = async (event) => {
		try {
			event.preventDefault();

			let updatedRoutine = async () => {
				await updateRoutine(token, routineToEdit.id, editName, editGoal)
			};
			updatedRoutine()
			setAllRoutines([updatedRoutine,...allRoutines])

			const reloadMyRoutines = () => {
        	window.location.href = "/myroutines";
      		};
      		reloadMyRoutines();


		}catch (error) {
			console.log(error)
		}
	}

	

    return(
        <div className='editroutineform'>
			<h4>Edit Routine:</h4>
		
			<form onSubmit={submitHandler}>
				<label htmlFor='Name'>Routine Name: </label>
				<input
					value={editName}
					type={"text"}
					onChange={(event) => {
						setEditName(event.target.value);
					}}
					placeholder='Name'
				></input>
				<label htmlFor='Goal'>Goal: </label>
				<input className='multilineform'
					value={editGoal}
					type={"text"}
					onChange={(event) => {
						setEditGoal(event.target.value);
					}}
					placeholder='Goal'
				></input>
				<button type={"submit"}>Edit</button>
			</form>
		</div>
    )
}

export default EditRoutine