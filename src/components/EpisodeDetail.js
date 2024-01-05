import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EpisodeDetail = ({ match }) => {
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${match.params.id}`);
      setEpisode(response.data);
    };

    fetchEpisode();
  }, [match.params.id]);

  return (
    <div>
      {episode && (
        <div>
          <h2>{episode.name}</h2>
          <p>Air Date: {episode.air_date}</p>
          <p>Episode: {episode.episode}</p>
        </div>
      )}
    </div>
  );
};

export default EpisodeDetail;
