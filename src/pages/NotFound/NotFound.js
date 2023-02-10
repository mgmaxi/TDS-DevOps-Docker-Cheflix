import React from 'react';
import './notFound.css';
import notfound from '../../assets/images/notfound.jpg';

const NotFound = () => {
  return (
    <div>
      <img src={notfound} alt="not found" className="notFound" />
    </div>
  );
};

export default NotFound;
