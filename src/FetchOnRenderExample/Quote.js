import React, { useEffect, useState } from 'react';
import { fetchQuoteById } from './mockFetch';
import LoadingSpinner from '../LoadingSpinner';

const Quote = props => {
  const { characterId } = props;
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateQuote = async () => {
      setLoading(true);
      const newQuote = await fetchQuoteById(characterId);
      setLoading(false);
      setQuote(newQuote);
    };
    updateQuote();
  }, [characterId]);
  if (loading) return <LoadingSpinner />
  return (
    <p>
      <em>{`"${quote}"`}</em>
    </p>
  );
};

export default Quote;
