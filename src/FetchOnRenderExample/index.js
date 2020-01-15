import React from 'react';
import './index.css';
import characterList from '../characterList';
import Character from './Character';

function App() {
  const characterIds = characterList.map(char => char.id);
  const randomCharacterIdIndex = Math.floor(Math.random() * characterIds.length);
  const randomCharacterId = characterIds[randomCharacterIdIndex];

  return (
    <div className="App">
      <h1>Random Star Wars Character</h1>
      <Character
        characterId={randomCharacterId}
      />
    </div>
  );
};

export default App;