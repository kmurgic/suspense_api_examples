import React, { useState } from 'react';
import './App.css';
import characterList from './characterList';
import Character from './Character';

function App() {
  const characterIds = characterList.map(char => char.id);
  const randomCharacterIdIndex = Math.floor(Math.random() * characterIds.length);
  const randomCharacterId = characterIds[randomCharacterIdIndex];
  const [characterId, setCharacterId] = useState(randomCharacterId);

  const handleClick = () => {
    const newIds = characterIds.filter(char => char.id !== characterId);
    const randomId = newIds[Math.floor(Math.random() * newIds.length)];
    setCharacterId(randomId);
  };

  return (
    <div className="App">
      <h1>Random Star Wars Character</h1>
      <Character
        characterId={characterId}
      />
      <button onClick={handleClick}>GET NEW CHARACTER</button>
    </div>
  );
};

export default App;
