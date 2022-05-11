import React, { useState, useEffect } from 'react';
import './header.css';
import cheflixLogo from '../../assets/images/logoCheflix.png';
import avatar from '../../assets/images/avatar.png';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { MdReplay } from 'react-icons/md';
import axios from '../../axios';
import requests from '../../request';

const Header = () => {
  const [movie, setMovie] = useState([]);
  const [showHeader, setShowHeader] = useState();
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  let movieReleaseDate = new Date(movie?.first_air_date);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    });

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

  return (
    <>
      <header
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${baseUrl + movie?.backdrop_path})`,
          backgroundPosition: 'center center',
        }}
      >
        <div className={`header-main ${showHeader && 'header-main-scroll'}`}>
          <div className="logo-nav-container">
            <img src={cheflixLogo} alt="Logo" className="logo" />
            <ul className="navigation">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">TV Shows</a>
              </li>
              <li>
                <a href="/">Movies</a>
              </li>
              <li>
                <a href="/">New & Popular</a>
              </li>
              <li>
                <a href="/">My List</a>
              </li>
            </ul>
          </div>
          <div className="profile">
            <FaSearch className="search" />
            <FaBell className="notification" />
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
        <div className="banner">
          <h2 className="banner-title">
            {movie?.title || movie?.name || movie.original_name}
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
            <button className="play-btn">
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
      </header>
    </>
  );
};

export default Header;
