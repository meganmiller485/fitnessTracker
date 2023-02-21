import React from 'react';
import { NavLink } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import PublicNavbar from './PublicNavbar';

const Home = ({ token }) => {
  if (!token) {
    return (
      <div className='mainpage'>
        <PublicNavbar />
        <div className='welcomecontainer'>
          <img
            className='last'
            src='http://cdn.cnn.com/cnnnext/dam/assets/200701111529-08-1980s-fashion-history-restricted.jpg'
          />
          <img
            className='last'
            src='https://www.wonderwall.com/wp-content/uploads/sites/2/2016/09/104-191263_Actual.jpg'
          />
          <img
            className='last'
            src='https://api.time.com/wp-content/uploads/2020/01/GettyImages-104401010.jpg'
          />
          <img
            className='last'
            src='https://nypost.com/wp-content/uploads/sites/2/2022/08/richard-simmons-10-1.jpg'
          />
          <img
            className='top'
            src='https://i.pinimg.com/originals/6a/24/33/6a2433a022b8af86539908bdfe4a985f.jpg'
          />
        </div>
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
