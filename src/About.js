import React, { Fragment } from 'react';

const About = props => {
  const { about, name } = props;

  return (
    <Fragment>
      <h3>{`About ${name}`}</h3>
      <p className="about">{about}</p>
    </Fragment>
  );
};

export default About;
