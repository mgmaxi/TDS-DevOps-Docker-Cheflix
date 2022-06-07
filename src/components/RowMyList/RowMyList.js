import React, { useState, useRef } from 'react';
import './row-my-list.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardMyList from '../CardMyList/CardMyList';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const RowMyList = ({
  title,
  myList,
  onDeleteFromMyList,
  onLike,
  onDislike,
}) => {
  const [slideNumber, setSliderNumber] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState('');
  const maxIndexSlider = 14;
  const rowRef = useRef();

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (direction) => {
    let distance = rowRef.current.getBoundingClientRect().x - 15;
    let cardWidth = 330;
    let cardPerPage = 1;
    if (direction === 'left' && slideNumber > 0) {
      rowRef.current.style.transform = `translateX(${
        cardWidth * cardPerPage + distance
      }px)`;
      setSliderNumber(slideNumber - 1);
    }
    if (direction === 'right' && slideNumber < maxIndexSlider) {
      rowRef.current.style.transform = `translateX(${
        -cardWidth * cardPerPage + distance
      }px)`;
      setSliderNumber(slideNumber + 1);
    }
  };

  const playTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(
        movie?.title ||
          movie?.name ||
          movie?.original_name ||
          movie?.original_title ||
          ''
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="wrapper">
        <IoIosArrowBack
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: slideNumber === 0 && 'none' }}
        />
        <div className="cards-container" ref={rowRef}>
          {myList.map((movie) => (
            <div className="card-wrapper">
              <CardMyList
                key={movie.id}
                movie={movie}
                onDeleteFromMyList={() => onDeleteFromMyList(movie)}
                onLike={onLike}
                onDislike={onDislike}
                onPlay={playTrailer}
              />
            </div>
          ))}
        </div>
        <IoIosArrowForward
          className="sliderArrow right"
          onClick={() => handleClick('right')}
          style={{
            display: slideNumber === maxIndexSlider && 'none',
          }}
        />
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default RowMyList;
