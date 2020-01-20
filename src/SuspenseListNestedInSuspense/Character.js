import React, { Suspense, SuspenseList } from 'react';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from '../LoadingSpinner';
import Name from './Name';

const Character = ({ buttonText, getNextCharacter, isPending, resource }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Name resource={resource} />
    <SuspenseList tail="collapsed" revealOrder="forwards">
      <Suspense key={`Quote-${resource.id}`} fallback={<LoadingSpinner />}>
        <Quote resource={resource} />
      </Suspense>
      <Suspense key={`MainImage-${resource.id}`} fallback={<LoadingSpinner />}>
        <MainImage resource={resource} />
      </Suspense>
      <Suspense key={`About-${resource.id}`} fallback={<LoadingSpinner />}>
        <About resource={resource} />
        <button disabled={isPending} onClick={getNextCharacter}>
          {buttonText}
        </button>
      </Suspense>
    </SuspenseList>
  </Suspense >
);

export default Character;
