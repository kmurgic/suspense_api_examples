import React from 'react';

const About = props => {
  const { resource } = props;
  const about = resource.about.read();

  return (
    <p className="about">{about}</p>
  );
};

export default About;
