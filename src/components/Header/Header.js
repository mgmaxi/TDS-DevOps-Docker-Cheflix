import React, { useState, useEffect } from 'react';
import './header.css';
import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { MdReplay } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';

import Navbar from '../Navbar/Navbar';

import axios from '../../axios';
import requests from '../../request';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Header = () => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  let movieReleaseDate = new Date(movie?.first_air_date);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
    <>
      <header
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${baseUrl + movie?.backdrop_path})`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="banner">
          <h2 className="banner-title">
            {movie?.title ||
              movie?.name ||
              movie?.original_name ||
              movie?.original_title}
          </h2>
          <div className="banner-specs-info">
            <div
              className={`${
                Math.floor(movie?.vote_average) >= 7
                  ? 'banner-specs-score'
                  : 'banner-specs-score-low'
              }`}
            >
              {movie?.vote_average + ' Score'}
            </div>
            <div className="banner-specs-year">
              {movieReleaseDate.getFullYear()}
            </div>
          </div>
          <p className="banner-text">{movie?.overview}</p>
          <div className="banner-btn">
            <button className="play-btn" onClick={() => playTrailer(movie)}>
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="info-btn">
              <FiInfo />
              <span>More info</span>
            </button>
          </div>
        </div>
        <div className="actions-language-container">
          <div className="actions-btn">
            <MdReplay />
          </div>
          <div className="language">{movie.original_language}</div>
        </div>
        <div className="banner-fade-bottom"></div>
        {trailerUrl && (
          <>
            <YouTube
              videoId={trailerUrl}
              opts={opts}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 999999,
              }}
            />
            <AiFillCloseCircle
              style={{
                position: 'absolute',
                top: '25px',
                left: '50%',
                margin: ' 0 0 0 -25px',
                width: '50px',
                height: '50px',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 9999999,
              }}
              onClick={() => setTrailerUrl('')}
            />
          </>
        )}
      </header>
    </>
  );
};

export default Header;
