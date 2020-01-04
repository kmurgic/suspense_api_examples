import React from 'react';

const MainImage = props => {
  const { image, name } = props;

  return (
    <img alt={name} className="main-image" src={image} />
  );
};

export default MainImage;