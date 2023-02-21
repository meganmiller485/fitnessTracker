import React, { useState } from 'react';
import MyNavbar from './MyNavbar';
import AddNewRoutine from './AddNewRoutine';
import EditRoutine from './EditRoutine';
import ModifyButtons from './ModifyButtons';
import DropDown from './DropDown';
import DeleteAct from './DeleteAct';
import EditCountDur from './EditCountDur';

const MyRoutines = ({
  allRoutines,
  setAllRoutines,
  token,
  user,
  setAllActivities,
  allActivities,
}) => {
  const [openEdit, setOpenEdit] = useState(false);

  const handleEditButton = () => {
    setOpenEdit(!openEdit);
  };

  const [routineToEdit, setRoutineToEdit] = useState({});
  const [activityToEdit, setActivityToEdit] = useState({});

  const [userActs, setUserActs] = useState([]);
  // console.log("THIS IS USER ACTS",userActs)

  return (
    <div className='myrout-container'>
      <MyNavbar />
      <h2 className='headers userrout'>My Routines</h2>
      <p className='creact'>
        <i className='cabcap'>Got a jazzy set in mind?</i>
        <button
          className='crb'
          onClick={() => {
            location.pathname = '/create';
          }}
        >
          Create New Routine!
        </button>
      </p>

      <div className='allmyroutines'>
        {allRoutines.map((routine) => {
          if (routine.creatorId === user.id) {
            const routineId = routine.id;
            // console.log("ID HERE", routineId)
            return (
              <div
                className='single-myroutine'
                key={routine.id}
              >
                <div className='myroutine-name'>{routine.name}</div>
                <div className='rout-info'>
                  <div>
                    <b>GOAL:</b> <br />
                    {routine.goal}
                  </div>
                  <div>
                    <b>CREATOR:</b> <br />
                    {routine.creatorName}
                  </div>
                  <div>
                    {routine.isPublic}
                    <p>
                      <b className='isPublic'>
                        {routine.isPublic ? 'PUBLIC' : 'NOT PUBLIC'}
                      </b>
                    </p>
                  </div>
                </div>
                <div className='fullMyRoutine'>
                  <b className='act-incl'>ACTIVITIES INCLUDE</b>

                  {routine.activities &&
                    routine.activities.map((activity) => {
                      const actId = activity.routineActivityId;

                      if (activity.length == 0) {
                        return ' No activities here';
                      } else {
                        return (
                          <div id='act-in-rout'>
                            <div key={activity.id}>
                              <div className='rout-desc myr'>
                                <div id='activity-name'>{activity.name}</div>
                              </div>
                              <b id='activity-title'>Description:</b>
                              <div className='rout-desc'>
                                {activity.description}
                              </div>
                              <div className='rout-desc myr'>
                                <b>Sets:</b> {activity.duration}
                              </div>
                              <div className='rout-desc myr'>
                                <b>Reps:</b> {activity.count}
                              </div>
                              <DeleteAct
                                className='rout-desc myr'
                                actId={actId}
                                token={token}
                                setAllActivities={setAllActivities}
                                allActivities={allActivities}
                              />
                              <EditCountDur
                                className='rout-desc myr'
                                setUserActs={setUserActs}
                                userActs={userActs}
                                setAllActivities={setAllActivities}
                                allActivities={allActivities}
                                activity={activity}
                                token={token}
                                activityToEdit={activityToEdit}
                                setActivityToEdit={setActivityToEdit}
                              />
                            </div>
                          </div>
                        );
                      }
                    })}

                  <div
                    className='rout-info'
                    id='modbut'
                  >
                    <DropDown
                      token={token}
                      setAllActivities={setAllActivities}
                      allActivities={allActivities}
                      routineId={routineId}
                      setUserActs={setUserActs}
                      userActs={userActs}
                    />
                    <ModifyButtons
                      handleEditButton={handleEditButton}
                      openEdit={openEdit}
                      setRoutineToEdit={setRoutineToEdit}
                      routine={routine}
                      allRoutines={allRoutines}
                      setAllRoutines={setAllRoutines}
                      token={token}
                      routineId={routineId}
                    />
                  </div>
                  {openEdit ? (
                    <EditRoutine
                      setAllRoutines={setAllRoutines}
                      allRoutines={allRoutines}
                      token={token}
                      user={user}
                      setRoutineToEdit={setRoutineToEdit}
                      routineToEdit={routineToEdit}
                    />
                  ) : null}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MyRoutines;
