import React, { useState, useEffect } from 'react';
import cheflixLogo from '../../assets/images/logoCheflix.png';
import avatar from '../../assets/images/avatar.png';
import { FaBell, FaPlay, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showHeader, setShowHeader] = useState();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    });
  }, []);

  return (
    <div>
      <div className={`header-main ${showHeader && 'header-main-scroll'}`}>
        <div className="logo-nav-container">
          <Link to="/">
            <img src={cheflixLogo} alt="Logo" className="logo" />
          </Link>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
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
          <Link to="/movies">
            <FaSearch className="search" />
          </Link>
          <FaBell className="notification" />
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
