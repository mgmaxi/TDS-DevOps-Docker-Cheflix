import React from 'react';
import { Link } from 'react-router-dom';

import posterNotFound from '../../assets/images/posterNotFound.jpg';
import './basicCard.css';

const BasicCard = ({ movie, notLink }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      {!notLink ? (
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
            <h2 className="basic-card-movie-title">
              {movie.title || movie.name || movie.original_name}
            </h2>
          </div>
        </Link>
      ) : (
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
          <h2 className="basic-card-movie-title">
            {movie.title || movie.name || movie.original_name}
          </h2>
        </div>
      )}
    </>
  );
};

export default BasicCard;
