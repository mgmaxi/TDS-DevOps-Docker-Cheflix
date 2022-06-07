import React, { useState, useEffect, useRef } from 'react';
import './row.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Card from '../Card/Card';
import axios from '../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ title, fetchUrl, isHighRow, onAddToMyList, onLike }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [slideNumber, setSliderNumber] = useState(0);
  const maxIndexSlider = 14;
  const rowRef = useRef();

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [fetchUrl]);

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

  const likedMovie = (movie) => {
    setMovies(
      movies.map((m) =>
        m.id === movie.id ? { ...movie, like: !movie.like, dislike: false } : m
      )
    );
  };

  const dislikedMovie = (movie) => {
    setMovies(
      movies.map((m) =>
        m.id === movie.id
          ? { ...movie, dislike: !movie.dislike, like: false }
          : m
      )
    );
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
          className={isHighRow ? 'sliderArrowHigh left' : 'sliderArrow left'}
          onClick={() => handleClick('left')}
          style={{ display: slideNumber === 0 && 'none' }}
        />
        <div className="cards-container" ref={rowRef}>
          {movies.map((movie) => (
            <div className={isHighRow ? '' : 'card-wrapper'}>
              <Card
                key={movie.id}
                movie={movie}
                isHighRow={isHighRow}
                onAddToMyList={() => onAddToMyList(movie)}
                onLike={likedMovie}
                onDislike={dislikedMovie}
                onPlay={playTrailer}
              />
            </div>
          ))}
        </div>
        <IoIosArrowForward
          className={isHighRow ? 'sliderArrowHigh right' : 'sliderArrow right'}
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

export default Row;
