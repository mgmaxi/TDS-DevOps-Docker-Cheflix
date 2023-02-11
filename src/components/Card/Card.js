import React, { useState } from 'react';
import './card.css';
import { FaPlayCircle } from 'react-icons/fa';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
  AiFillInfoCircle,
} from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Card = ({
  movie,
  isHighRow,
  onAddToMyList,
  onLike,
  onDislike,
  onPlay,
}) => {
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
          onClick={() => onPlay(movie)}
        />
        <div className={`${isHighRow ? 'hide' : 'card-info'}`}>
          <div className="movie-title">
            {movie?.title ||
              movie?.name ||
              movie?.original_name ||
              movie?.original_title}
          </div>
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
              <FaPlayCircle
                className="specs-icon"
                onClick={() => onPlay(movie)}
              />
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

              <Link to={'/movies/' + movie.id} className="specs-icon-container">
                <AiFillInfoCircle
                  className="specs-icon"
                  onClick={() => onPlay(movie)}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
