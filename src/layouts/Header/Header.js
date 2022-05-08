import React from 'react';
import './header.css';
import cheflixLogo from '../../assets/images/logoCheflix.png';
import avatar from '../../assets/images/avatar.png';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { MdReplay } from 'react-icons/md';

const Header = () => {
  return (
    <>
      <header
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url("https://occ-0-5397-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX9XFMrpBHxQqgoGuyka_e6XM_7mZ4GJMzU4Mggydc4nE8I6FlZVCENjGwPVlzB792PghkSWW7ZcjBKKxrgk5ih1T2Ex6lxVpBAc.webp?r=3d5")',
          backgroundPosition: 'center center',
        }}
      >
        <div className="header-main">
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
          <h2 className="banner-title">Drag me to..</h2>
          <p className="banner-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            culpa mollitia necessitatibus delectus accusamus magni praesentium
            officia, fugit id, quaerat olor sit amet consectetur adipisicing
            elit. Quidem culpa mollitia necessitatibus delectus accusamus magni
            praesentium officia, fugit id, quaerat commodi nobis neque quisquam
            sunt accusantium deleniti ab doloremque deserunt! Asperiores
            doloribus accusamus tenetur qui cum
          </p>
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
        <div className="actions-maturity-container">
          <div className="actions-btn">
            <MdReplay />
          </div>
          <div className="maturity-rating">16+</div>
        </div>
      </header>
    </>
  );
};

export default Header;
