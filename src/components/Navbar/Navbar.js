import React, { useState, useEffect } from 'react';
import cheflixLogo from '../../assets/images/logoCheflix.png';
import avatar from '../../assets/images/avatar.png';
import { FaBell, FaSearch } from 'react-icons/fa';
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
              <Link to="/tv">TV Shows</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/newpopular">New & Popular</Link>
            </li>
            <li>
              <Link to="/mylist">My List</Link>
            </li>
          </ul>
        </div>
        <div className="profile">
          <Link to="/search">
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
