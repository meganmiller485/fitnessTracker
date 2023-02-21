import React, { useState } from 'react';
import { makeRoutine } from '../api/routines';
import { NavLink, useNavigate } from 'react-router-dom';
import DropDown from './DropDown';

const AddNewRoutine = ({
  allActivities,
  setAllActivities,
  setAllRoutines,
  allRoutines,
  token,
  act,
}) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const submitHandler = async (event) => {
    console.log('my token', token);
    event.preventDefault();
    //how to add a routine - calls make routine- passes in the variables, sets routine state to routinetoAdd
    const routineToAdd = await makeRoutine(token, name, goal, isPublic);

    console.log('NEW ROUTINE', routineToAdd);

    setAllRoutines([routineToAdd, ...allRoutines]);
    navigate('/myroutines');
  };

  return (
    <div className='newroutpage'>
      <h4 className='headers nrhead'>Create the Raddest Routine Here</h4>

      <form
        className='newroutineform newrout'
        onSubmit={submitHandler}
      >
        <label htmlFor='Name'></label>
        <input
          value={name}
          type={'text'}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder='Routine Name'
        ></input>
        <br />
        <label htmlFor='Goal'></label>
        <input
          value={goal}
          type={'text'}
          onChange={(event) => {
            setGoal(event.target.value);
          }}
          placeholder='Goal'
        ></input>
        <label
          htmlFor='public'
          className='makepub'
        >
          Make it Public?
          <input
            type='checkbox'
            checked={isPublic}
            onChange={(event) => {
              setIsPublic(event.target.checked);
            }}
          ></input>
        </label>
        <br />
        <button
          className='submitbuttons'
          type={'submit'}
        >
          Create
        </button>
        <p>
          Back to{' '}
          <span>
            <NavLink
              to='/activities'
              className='backlinks'
            >
              activities
            </NavLink>
          </span>
        </p>
      </form>
    </div>
  );
};

export default AddNewRoutine;
