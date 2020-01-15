import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <ul>
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}/fetch-on-render`}
      >
        Fetch On Render Example
      </Link>
    </li>
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}/fetch-then-render`}
      >
        Fetch Then Render Example
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/suspense`}>
        Suspense Example
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/suspense-list`}>
        Suspense List Example
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/use-transition`}>
        useTransition Example
      </Link>
    </li>
  </ul>
)


export default Home;