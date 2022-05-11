import React, { useState, useRef } from 'react';
import './row-my-list.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardMyList from '../CardMyList/CardMyList';

const RowMyList = ({ title, myList, onDeleteFromMyList }) => {
  const [slideNumber, setSliderNumber] = useState(0);
  const maxIndexSlider = 14;
  const rowRef = useRef();

  const handleClick = (direction) => {
    let distance = rowRef.current.getBoundingClientRect().x - 15;
    let cardWidth = 307;
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
            <CardMyList
              key={movie.id}
              movie={movie}
              onDeleteFromMyList={() => onDeleteFromMyList(movie)}
            />
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
    </div>
  );
};

export default RowMyList;
