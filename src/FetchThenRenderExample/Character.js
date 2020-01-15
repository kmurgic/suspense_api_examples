import React, { useEffect, useState } from 'react';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from '../LoadingSpinner';
import fetchCharacterData from './fetchCharacterData';

const Character = props => {
  const { characterId } = props;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateData = async () => {
      setLoading(true);
      const newData = await fetchCharacterData(characterId);
      setLoading(false);
      setData(newData);
    };
    updateData();
  }, [characterId]);

  const { name, quote, image, about } = data;

  if (loading) return <LoadingSpinner />
  return (
    <div>
      <h2>{name}</h2>
      <Quote quote={quote} />
      <MainImage image={image} />
      <About about={about} />
    </div>
  );
};

export default Character;
