import React, { useState, useEffect, useRef } from 'react';
import './row.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Card from '../Card/Card';
import axios from '../../axios';

const Row = ({ title, fetchUrl, genres }) => {
  const [movies, setMovies] = useState([]);
  const [slideNumber, setSliderNumber] = useState(0);
  const maxIndexSlider = 3;
  const rowRef = useRef();

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
    let distance = rowRef.current.getBoundingClientRect().x - 50;
    let cardWidth = 307;
    let cardPerPage = 5;
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
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} genres={genres} />
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

export default Row;
