import React, { useEffect, useState } from 'react';
import { fetchAboutById } from './mockFetch';
import LoadingSpinner from '../LoadingSpinner';

const About = props => {
  const { characterId } = props;
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
    <p className="about">{about}</p>
  );
};

export default About;
