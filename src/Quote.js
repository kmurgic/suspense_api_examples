import React from 'react';

const Quote = ({ quote }) => (
  <p>
    <quote>
      <em>{`"${quote}"`}</em>
    </quote>
  </p>
);


export default Quote;
