import React, { Suspense, SuspenseList } from 'react';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from '../LoadingSpinner';
import fetchCharacterData from '../fetchCharacterData';
import Name from './Name';

const Character = props => {
  const { characterId } = props;
  const resource = fetchCharacterData(characterId);

  return (
    <div>
      <SuspenseList key={characterId} tail="collapsed" revealOrder="forwards">
        <Suspense key={`Name-${characterId}`} fallback={<LoadingSpinner />}>
          <Name resource={resource} />
        </Suspense>
        <Suspense key={`Quote-${characterId}`} fallback={<LoadingSpinner />}>
          <Quote resource={resource} />
        </Suspense>
        <Suspense key={`MainImage-${characterId}`} fallback={<LoadingSpinner />}>
          <MainImage resource={resource} />
        </Suspense>
        <Suspense key={`About-${characterId}`} fallback={<LoadingSpinner />}>
          <About resource={resource} />
        </Suspense>
      </SuspenseList>
    </div>
  );
};

export default Character;
