import React from 'react';
import { NavLink } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import PublicNavbar from './PublicNavbar';

const Routines = ({ allRoutines, setAllRoutines, token, user }) => {
  return (
    <div className='routact-container'>
      <div>{!token ? <PublicNavbar /> : <MyNavbar />}</div>

      <h2 className='headers routact'>Routines</h2>
      <p className='subtitle'>
        Take inspiration with these routines that are simply <i>bodacious</i>.
      </p>
      <div className='allrout'>
        {allRoutines.length > 0 &&
          allRoutines.map((routine) => {
            if (routine.isPublic || routine.creatorId === user.id) {
              const routineId = routine.id;
              return (
                <div
                  className='single routine'
                  key={routine.id}
                >
                  <div className='rout-name'>{routine.name}</div>
                  <div className='rout-info'>
                    <div>GOAL: {routine.goal}</div>
                    <div>
                      CREATOR:
                      {routine.creatorName}
                    </div>
                    <div>
                      {routine.isPublic}

                      {routine.isPublic ? 'PUBLIC' : 'NOT PUBLIC'}
                    </div>
                  </div>

                  <b className='act-incl'>ACTIVITIES INCLUDE</b>
                  <div className='actrout'>
                    {routine.activities &&
                      routine.activities.map((activity) => {
                        if (activity.length == 0) {
                          return 'No activities here ..yet';
                        } else {
                          return (
                            <div id='act-in-rout'>
                              <div
                                key={activity.id}
                                className='rout-desc'
                              >
                                <div className='rout-desc'>{activity.name}</div>
                                DESCRIPTION:
                                <div className='rout-desc'>
                                  {activity.description}
                                </div>
                                <div className='rout-desc'>
                                  DURATION:
                                  {activity.duration}
                                </div>
                                <div className='rout-desc'>
                                  COUNT:
                                  {activity.count}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
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
