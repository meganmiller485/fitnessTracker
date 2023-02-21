import React from 'react';
import { NavLink } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import PublicNavbar from './PublicNavbar';

const Routines = ({ allRoutines, setAllRoutines, token, user }) => {
  return (
    <div className='allroutines-bigcontainer'>
      <div>{!token ? <PublicNavbar /> : <MyNavbar />}</div>

      <h2 className='headers routact'>Routines</h2>
      <p className='subtitle'>
        Take inspiration with these routines that are simply <i>bodacious</i>.
      </p>
      <div className='allroutines'>
        {allRoutines.length > 0 &&
          allRoutines.map((routine) => {
            if (routine.isPublic || routine.creatorId === user.id) {
              const routineId = routine.id;
              return (
                <div
                  className='single-routine'
                  key={routine.id}
                >
                  <div className='rout-name'>{routine.name}</div>
                  <div className='rout-info'>
                    <div>
                      <b className='routine-title'>GOAL:</b> <br />
                      {routine.goal}
                    </div>
                    <div>
                      <b className='routine-title'>CREATOR:</b> <br />
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
                  <div>
                    <p className='act-incl'>ACTIVITIES INCLUDE</p>
                    <div className='activityOnRoutine'>
                      {routine.activities &&
                        routine.activities.map((activity) => {
                          if (activity.length == 0) {
                            return 'No activities here ..yet';
                          } else {
                            return (
                              <div id='act-in-rout'>
                                <div
                                  key={activity.id}
                                  className='activity-in-rout'
                                >
                                  <div>
                                    <b id='activity-name'>{activity.name}</b>
                                  </div>
                                  <b id='activity-title'>Description:</b>
                                  <div className='activity-desc'>
                                    {activity.description}
                                  </div>
                                  <div className='activity-desc'>
                                    <b id='activity-title'>Sets:</b>{' '}
                                    {activity.duration}
                                  </div>
                                  <div className='activity-desc'>
                                    <b id='activity-title'>Reps:</b>{' '}
                                    {activity.count}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                </div>
              );
            }
            console.log('ROUTINE CREATORS', routine.creatorName);
          })}
      </div>
    </div>
  );
};

export default Routines;
