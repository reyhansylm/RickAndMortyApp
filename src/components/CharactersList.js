import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, selectFavorites } from '../store/charactersSlice';
import './App.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await api.get(`character?page=${currentPage}`);
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToFavorites = (character) => {
    if (favorites.length < 10) {
      dispatch(addToFavorites(character));
    } else {
      alert('Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.');
    }
  };

  return (
    <div className="container">
      {characters.map((character) => (
        <div key={character.id} className="list-item">
          <h3>{character.name}</h3>
          <p>{character.species}</p>
          {/* Diğer bilgiler burada gösterilebilir */}
          <button
            className="favorite-button"
            onClick={() => handleAddToFavorites(character)}
            disabled={favorites.length >= 10}
          >
            Favori Ekle
          </button>
        </div>
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default CharacterList;
