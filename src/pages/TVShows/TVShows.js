import React, { useState, useEffect } from 'react';
import { useTmdbApiContext } from '../../contexts/TmdbApiContext';
import BasicCard from '../../components/BasicCard/BasicCard';

const TVShows = () => {
  const [popularSeries, setPopularSeries] = useState([]);

  const { mostPopularSeries } = useTmdbApiContext();

  useEffect(() => {
    setPopularSeries(mostPopularSeries);
  }, [mostPopularSeries]);

  return (
    <div className="moviesContainer">
      <ul className="movieCardContainer">
        {popularSeries.map((serie) => (
          <li className="MovieCard">
            <BasicCard key={serie.id} movie={serie} notLink />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TVShows;
