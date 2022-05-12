import React from 'react';
import './card-my-list.css';
import { FaPlayCircle } from 'react-icons/fa';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';

const CardMyList = ({ movie, onDeleteFromMyList, onLike, onDislike }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  let movieReleaseDate = new Date(movie.release_date);

  return (
    <>
      <div className="card-container">
        <img
          src={`${baseUrl}${movie.backdrop_path}`}
          alt={movie.title}
          className="card-image"
        />
        <div className="card-info">
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
              {movie.like ? (
                <AiFillLike
                  className="specs-icon-bold"
                  onClick={() => onLike(movie)}
                />
              ) : (
                <AiOutlineLike
                  className="specs-icon"
                  onClick={() => onLike(movie)}
                />
              )}
              {movie.dislike ? (
                <AiFillDislike
                  className="specs-icon-bold"
                  onClick={() => onDislike(movie)}
                />
              ) : (
                <AiOutlineDislike
                  className="specs-icon"
                  onClick={() => onDislike(movie)}
                />
              )}
              <BsCheckCircle
                className="specs-icon"
                onClick={() => onDeleteFromMyList(movie)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMyList;
