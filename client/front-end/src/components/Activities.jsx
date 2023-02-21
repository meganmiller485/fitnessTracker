import React from 'react';
import PublicNavbar from './PublicNavbar';
import MyNavbar from './MyNavbar';
import AddNewAct from './AddNewAct';

const Activities = ({ allActivities, token }) => {
  return (
    <div className='allActivities-container'>
      <div>{!token ? <PublicNavbar /> : <MyNavbar />}</div>

      <h2 className='headers routact'>Activities</h2>
      <p className='subtitle'>
        Build out your routine with these <i>rad</i> activities!
      </p>

      {!token ? (
        ''
      ) : (
        <p className='creact'>
          <i className='cabcap'>Already a pro?</i>
          <button
            className='createActButton'
            onClick={() => {
              location.pathname = '/createAct';
            }}
          >
            Create Activity
          </button>
        </p>
      )}
      <div className='allact'>
        {allActivities.map((activity) => {
          return (
            <div
              className='single-activity'
              key={activity.id}
            >
              <div className='act-name'>{activity.name}</div>

              <p>
                <span className='act-desc'>Description:</span>{' '}
                {activity.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
