import React, { useState, useTransition, Suspense } from 'react';
import './App.css';
import characterList from './characterList';
import LoadingSpinner from './LoadingSpinner';
import fetchCharacterData from './fetchCharacterData';
import Character from './Character';

function App() {
  const characterIds = characterList.map(char => char.id);
  const randomCharacterIdIndex = Math.floor(Math.random() * characterIds.length);
  const randomCharacterId = characterIds[randomCharacterIdIndex];
  const [characterId, setCharacterId] = useState(randomCharacterId);
  const [resource, setResource] = useState(fetchCharacterData(characterId));
  const [
    startTransition,
    isPending
  ] = useTransition({
    timeoutMs: 2000
  });
  const handleClick = () => {
    startTransition(() => {
      const newIds = characterIds.filter(id => id !== characterId);
      const randomId = newIds[Math.floor(Math.random() * newIds.length)];
      setCharacterId(randomId);
      setResource(fetchCharacterData(randomId));
    })
  };

  const buttonText = isPending ? 'LOADING CHARACTER...' : 'GET NEW CHARACTER';

  return (
    <div className="App">
      <h1>Random Star Wars Character</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Character resource={resource} />
      </Suspense>
      <button disabled={isPending} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default App;
