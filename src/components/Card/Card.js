import React from 'react';
import './card.css';
import { FaPlayCircle } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Card = ({ movie, genres }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      <div className="card-container">
        <img
          src={baseUrl + movie.backdrop_path}
          alt={movie.title}
          className="card-image"
        />
        <div className="card-info">
          <div className="icons">
            <FaPlayCircle />
            <AiOutlineLike />
            <AiOutlineDislike />
            <IoIosAddCircleOutline />
          </div>
          <div className="specs">
            <div className="year">{movie.release_date}</div>
            <div className="maturity">+16</div>
            <div className="duration">1 hour 25 mins</div>
          </div>
          <div className="genre"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
