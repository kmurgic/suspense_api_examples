import React, { Suspense, SuspenseList } from 'react';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from '../LoadingSpinner';
import Name from './Name';

const Character = ({ buttonText, getNextCharacter, resource }) => (
  <SuspenseList tail="collapsed" revealOrder="forwards">
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
      <button onClick={getNextCharacter}>
        {buttonText}
      </button>
    </Suspense>
  </SuspenseList>
);

export default Character;
