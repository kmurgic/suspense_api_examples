import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <ul>
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}/suspense-list-no-keys`}
      >
        Suspense List Without Keys
      </Link>
    </li>
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}/suspense-list-with-keys`}
      >
        Suspense List With Keys
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/suspense-list-with-keys-and-transition`}>
        Suspense List With Keys and Transition
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/suspense-list-nested-in-suspense`}>
        Suspense List Nested in Suspense
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/suspense-list-hacky`}>
        Hacky Solution to Suspense List Issues
      </Link>
    </li>
  </ul>
)


export default Home;