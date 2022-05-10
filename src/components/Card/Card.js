import React from 'react';
import './card.css';
import { FaPlayCircle } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Card = ({ movie, isHighRow }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  let movieReleaseDate = new Date(movie.release_date);

  return (
    <>
      <div
        className={`${isHighRow ? 'card-container-high' : 'card-container'}`}
      >
        <img
          src={`${baseUrl}${
            isHighRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.title}
          className={` ${isHighRow ? 'card-image-high' : 'card-image'}`}
        />
        <div className={`${isHighRow ? 'hide' : 'card-info'}`}>
          <div className="movie-title">{movie.title}</div>
          <div className="specs">
            <div className="specs-info">
              <div className="specs-year">{movieReleaseDate.getFullYear()}</div>
              <div
                className={`${
                  Math.floor(movie.vote_average) >= 7
                    ? 'specs-score'
                    : 'specs-score-low'
                }`}
              >
                {movie.vote_average} Score
              </div>
            </div>
            <div className="specs-icons">
              <FaPlayCircle className="specs-icon" />
              <AiOutlineLike className="specs-icon" />
              <AiOutlineDislike className="specs-icon" />
              <IoIosAddCircleOutline className="specs-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
