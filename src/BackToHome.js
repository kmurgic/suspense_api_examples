import React from 'react';
import { Link } from 'react-router-dom';

const BackToHome = props => (
  <div className='back-home'>
    <Link to={`${process.env.PUBLIC_URL}/`}>
      {'<<< Back To Home Page'}
    </Link>
  </div>
);


export default BackToHome;
