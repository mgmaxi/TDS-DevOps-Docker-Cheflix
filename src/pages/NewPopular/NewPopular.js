import React, { useState, useEffect } from 'react';
import { useTmdbApiContext } from '../../contexts/TmdbApiContext';
import BasicCard from '../../components/BasicCard/BasicCard';

const NewPopular = () => {
  const [newPopular, setNewPopular] = useState([]);

  const { moviesUpComing } = useTmdbApiContext();

  useEffect(() => {
    setNewPopular(moviesUpComing);
  }, [moviesUpComing]);
  return (
    <div className="moviesContainer">
      <ul className="movieCardContainer">
        {newPopular.map((serie) => (
          <li className="MovieCard">
            <BasicCard key={serie.id} movie={serie} notLink />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewPopular;
