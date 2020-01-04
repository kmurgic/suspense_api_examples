import React, { Suspense } from 'react';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from './LoadingSpinner';
import fetchCharacterData from './fetchCharacterData';
import Name from './Name';

const Character = props => {
  const { characterId } = props;
  const resource = fetchCharacterData(characterId);

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Name resource={resource} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Quote resource={resource} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <MainImage resource={resource} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <About resource={resource} />
      </Suspense>
    </div>
  );
};

export default Character;
