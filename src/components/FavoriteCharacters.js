import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites, selectFavorites } from '../store/charactersSlice';
import './App.css';

const FavoriteCharacters = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleRemoveFromFavorites = (character) => {
    const confirmRemove = window.confirm(`'${character.name}' karakterini favorilerden kaldırmak istediğinize emin misiniz?`);

    if (confirmRemove) {
      dispatch(removeFromFavorites(character));
    }
  };

  return (
    <div className="container">
      <h2>Favori Karakterler</h2>
      {favorites.map((character) => (
        <div key={character.id} className="list-item">
          <h3>{character.name}</h3>
          <button className="favorite-button" onClick={() => handleRemoveFromFavorites(character)}>
            Sil
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoriteCharacters;
