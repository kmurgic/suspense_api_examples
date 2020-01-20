import React from 'react';

const Quote = ({ resource }) => {
  const quote = resource.quote.read();
  return (
    <p>
      <em>{`"${quote}"`}</em>
    </p>
  );
}


export default Quote;
