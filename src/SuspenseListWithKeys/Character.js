import React, { Suspense, SuspenseList } from 'react';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from '../LoadingSpinner';
import Name from './Name';

const Character = ({ buttonText, getNextCharacter, resource }) => (
  <SuspenseList tail="collapsed" revealOrder="forwards">
    <Suspense key={`Name-${resource.id}`} fallback={<LoadingSpinner />}>
      <Name resource={resource} />
    </Suspense>
    <Suspense key={`Quote-${resource.id}`} fallback={<LoadingSpinner />}>
      <Quote resource={resource} />
    </Suspense>
    <Suspense key={`MainImage-${resource.id}`} fallback={<LoadingSpinner />}>
      <MainImage resource={resource} />
    </Suspense>
    <Suspense key={`About-${resource.id}`} fallback={<LoadingSpinner />}>
      <About resource={resource} />
      <button onClick={getNextCharacter}>
        {buttonText}
      </button>
    </Suspense>
  </SuspenseList>
);

export default Character;
