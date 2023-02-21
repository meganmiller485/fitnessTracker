import React, { useState } from 'react';
import { makeActivity } from '../api/activities';
import { NavLink, useNavigate } from 'react-router-dom';

const AddNewAct = ({ setAllActivities, allActivities, token, user }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = async (event) => {
    // console.log("this is activity to add", activityToAdd)
    event.preventDefault();
    // how to add a routine - calls make routine- passes in the variables, sets routine state to routinetoAdd

    const activityToAdd = await makeActivity(token, name, description);
    //this sets our all posts state to add our new post and then add all our other posts
    setAllActivities([activityToAdd, ...allActivities]);
    navigate('/activities');
  };

  return (
    <div className='newactpage'>
      <h4 className='headers nrhead'>Make Your New B*tchin' Activity</h4>
      <form
        className='newactivityform newact'
        onSubmit={submitHandler}
      >
        <label htmlFor='Name'></label>
        <input
          value={name}
          type={'text'}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder='Activity Name'
        ></input>
        <label htmlFor='Description'></label>
        <input
          value={description}
          type={'text'}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          placeholder='Description'
        ></input>

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

export default AddNewAct;
