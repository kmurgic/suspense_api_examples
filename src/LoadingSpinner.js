import React from 'react';
import loadingSpinner from './images/loadingSpinner.gif';

const LoadingSpinner = () => (
  <div>
    <img alt={'loading...'} className="loading-spinner" src={loadingSpinner} />
  </div>
);


export default LoadingSpinner;