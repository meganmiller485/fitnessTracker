import React from 'react';
import { NavLink } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import PublicNavbar from './PublicNavbar';

const Home = ({ token }) => {
  if (!token) {
    return (
      <div className='mainpage'>
        <PublicNavbar />
        <div className='welcomecontainer'></div>
        <div id='welcome'>
          <h1 className='welcomeline'>Welcome to</h1>
          <h3 className='fitness'>Fitness Trac.kr</h3>
          <h3 className='witty'>Ready to get your groove on?</h3>
          <h2 className='logreg'>
            <span>
              <NavLink
                to='/login'
                id='word'
              >
                Login
              </NavLink>{' '}
            </span>
            or{' '}
            <NavLink
              to='/register'
              id='word'
            >
              Register
            </NavLink>{' '}
            to get started.
          </h2>
        </div>
      </div>
    );
  } else {
    return <MyNavbar />;
  }
};

export default Home;
