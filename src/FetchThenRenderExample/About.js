import React from 'react';

const About = props => {
  const { about } = props;

  return (
    <p className="about">{about}</p>
  );
};

export default About;
