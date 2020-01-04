import React, { useEffect, useState } from 'react';
import { fetchImageById } from './mockFetch';
import LoadingSpinner from './LoadingSpinner';

const MainImage = props => {
  const { characterId, name } = props;
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

  const altText = name ? name : 'Star Wars Character';
  if (loading) return <LoadingSpinner />
  return (
    <img alt={altText} className="main-image" src={image} />
  );
};

export default MainImage;