import React from 'react';
import { Link } from 'react-router-dom';

import posterNotFound from '../../assets/images/posterNotFound.jpg';
import './basicCard.css';

const BasicCard = ({ movie }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  console.log(movie);

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="basic-card-container">
        <img
          src={
            movie.backdrop_path !== null
              ? `${baseUrl}${movie.backdrop_path}`
              : posterNotFound
          }
          alt={movie.title}
          className={'basic-card-image '}
        />
        <h2 className="basic-card-movie-title">{movie.title}</h2>
      </div>
    </Link>
  );
};

export default BasicCard;
