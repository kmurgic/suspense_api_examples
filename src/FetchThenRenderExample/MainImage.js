import React from 'react';

const MainImage = props => {
  const { image } = props;

  return (
    <img alt="Character" className="main-image" src={image} />
  );
};

export default MainImage;