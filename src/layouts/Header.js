import React from 'react';
import '../assets/styles/header.css';
import cheflixLogo from '../assets/images/logoCheflix.png';
import bgImage from '../assets/images/bg.png';
import avatar from '../assets/images/avatar.png';
import HeaderView from '../components/HeaderView';

const Header = () => {
  return (
    <>
      <header>
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
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
        <div className="header-bg">
          <img src={bgImage} alt="" className="bg" />
        </div>
        <div className="header-view-container">
          <HeaderView></HeaderView>
        </div>
      </header>
    </>
  );
};

export default Header;
