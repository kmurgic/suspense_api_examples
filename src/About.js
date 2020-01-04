import React, { Fragment, useEffect, useState } from 'react';
import { fetchAboutById } from './mockFetch';
import LoadingSpinner from './LoadingSpinner';

const About = props => {
  const { characterId, name } = props;
  const [about, setAbout] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateAbout = async () => {
      setLoading(true);
      const newAbout = await fetchAboutById(characterId);
      setLoading(false);
      setAbout(newAbout);
    };
    updateAbout();
  }, [characterId]);

  if (loading) return <LoadingSpinner />
  return (
    <Fragment>
      <h3>{`About ${name}`}</h3>
      <p className="about">{about}</p>
    </Fragment>
  );
};

export default About;
