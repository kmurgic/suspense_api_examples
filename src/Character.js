import React, { Suspense, SuspenseList } from 'react';
import Quote from './Quote';
import MainImage from './MainImage';
import About from './About';
import LoadingSpinner from './LoadingSpinner';
import Name from './Name';

const Character = ({ resource }) => (
  <div>
    <SuspenseList revealOrder="forwards">
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
    </SuspenseList>
  </div >
);

export default Character;
