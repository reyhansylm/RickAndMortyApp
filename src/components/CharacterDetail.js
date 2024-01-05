import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ match }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${match.params.id}`);
      setCharacter(response.data);
    };

    fetchCharacter();
  }, [match.params.id]);

  return (
    <div>
      {character && (
        <div>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
