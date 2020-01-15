import React, { useEffect, useState } from 'react';
import { fetchNameById } from './mockFetch';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from '../LoadingSpinner';

const Character = props => {
  const { characterId } = props;
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const updateName = async () => {
      setLoading(true);
      const newName = await fetchNameById(characterId);
      setLoading(false);
      setName(newName);
    };
    updateName();
  }, [characterId]);

  if (loading) return <LoadingSpinner />
  return (
    <div>
      <h2>{name}</h2>
      <Quote characterId={characterId} />
      <MainImage characterId={characterId} />
      <About characterId={characterId} />
    </div>
  );
};

export default Character;
