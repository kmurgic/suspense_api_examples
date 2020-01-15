import React, { useEffect, useState } from 'react';
import { fetchImageById } from './mockFetch';
import LoadingSpinner from '../LoadingSpinner';

const MainImage = props => {
  const { characterId } = props;
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateImage = async () => {
      setLoading(true);
      const newImage = await fetchImageById(characterId);
      setLoading(false);
      setImage(newImage);
    };
    updateImage();
  }, [characterId]);

  if (loading) return <LoadingSpinner />
  return (
    <img alt="Character" className="main-image" src={image} />
  );
};

export default MainImage;