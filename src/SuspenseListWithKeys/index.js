import React, { useState } from 'react';
import './index.css';
import characterList from '../characterList';
import fetchCharacterData from '../fetchCharacterData';
import Character from './Character';
import BackToHome from '../BackToHome';

function App() {
  const characterIds = characterList.map(char => char.id);
  const randomCharacterIdIndex = Math.floor(Math.random() * characterIds.length);
  const randomCharacterId = characterIds[randomCharacterIdIndex];
  const [characterId, setCharacterId] = useState(randomCharacterId);
  const [resource, setResource] = useState(fetchCharacterData(characterId));

  const getNextCharacter = () => {
    const newIds = characterIds.filter(id => id !== characterId);
    const randomId = newIds[Math.floor(Math.random() * newIds.length)];
    setCharacterId(randomId);
    setResource(fetchCharacterData(randomId));
  };

  const buttonText = 'GET NEW CHARACTER';

  return (
    <div className="App">
      <BackToHome />
      <h1>Random Star Wars Character</h1>
      <Character
        buttonText={buttonText}
        getNextCharacter={getNextCharacter}
        resource={resource}
      />
    </div>
  );
};

export default App;
