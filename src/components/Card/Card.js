import React, { useState } from 'react';
import './card.css';
import { FaPlayCircle } from 'react-icons/fa';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';

const Card = ({ movie, isHighRow, onAddToMyList, onLike, onDislike }) => {
  const [isOnMyList, setIsOnMyList] = useState(false);

  const baseUrl = 'https://image.tmdb.org/t/p/original';

  let movieReleaseDate = new Date(movie.release_date);

  const addToMyList = (movie) => {
    onAddToMyList(movie);
    setIsOnMyList(true);
  };

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
              {isOnMyList ? (
                <BsCheckCircle className="specs-icon" onClick={addToMyList} />
              ) : (
                <IoIosAddCircleOutline
                  className="specs-icon"
                  onClick={addToMyList}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
