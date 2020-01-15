import React from 'react';

const Name = props => {
  const { resource } = props;
  const name = resource.name.read();

  return (
    <h2>{name}</h2>
  );
};

export default Name;