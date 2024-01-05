import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
      setEpisodes(response.data.results);
      setTotalPages(response.data.info.pages);
    };

    fetchEpisodes();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {episodes.map((episode) => (
        <div key={episode.id}>
          <h3>
            <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
          </h3>
          <p>Air Date: {episode.air_date}</p>
          <p>Episode: {episode.episode}</p>
        </div>
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default EpisodesList;
