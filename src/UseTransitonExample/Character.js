import React, { Suspense } from 'react';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from '../LoadingSpinner';
import Name from './Name';

const Character = ({ buttonText, getNextCharacter, isPending, resource }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Name resource={resource} />
    <Quote resource={resource} />
    <MainImage resource={resource} />
    <About resource={resource} />
    <button disabled={isPending} onClick={getNextCharacter}>
      {buttonText}
    </button>
  </Suspense>
);

export default Character;
