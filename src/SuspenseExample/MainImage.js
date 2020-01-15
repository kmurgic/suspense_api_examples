import React from 'react';

const MainImage = props => {
  const { resource } = props;
  const image = resource.image.read();
  return (
    <img alt="Character" className="main-image" src={image} />
  );
};

export default MainImage;