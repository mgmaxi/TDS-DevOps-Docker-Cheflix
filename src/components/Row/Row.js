import React, { useState, useRef } from 'react';
import './row.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaPlayCircle } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Row = ({ title }) => {
  const [slideNumber, setSliderNumber] = useState(0);
  const maxIndexSlider = 5;
  const rowRef = useRef();

  const handleClick = (direction) => {
    let distance = rowRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      rowRef.current.style.transform = `translateX(${280 + distance}px)`;
      setSliderNumber(slideNumber - 1);
    }
    if (direction === 'right' && slideNumber < maxIndexSlider) {
      rowRef.current.style.transform = `translateX(${-280 + distance}px)`;
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

        <IoIosArrowForward
          className="sliderArrow right"
          onClick={() => handleClick('right')}
          style={{
            display: slideNumber === maxIndexSlider && 'none',
          }}
        />
        <div className="cards-container" ref={rowRef}>
          <div className="card-container">
            <img
              src="https://occ-0-5397-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcGjbUhaceM5B41UpIIKXMI9cq6Xjp2bgDoemIQ6l_MqR8v1t8KWLDhPLwD5OpR6gNEt1_5KFeZ7Gn4jcB17IAOSCDWI45eB9uOSkrpnrDD6pgJBx2uwqdcGCvbnP2F9-Y9v.jpg?r=d51"
              alt="Movie card"
              className="card-image"
            />
            <div className="card-info">
              <div className="icons">
                <FaPlayCircle />
                <AiOutlineLike />
                <AiOutlineDislike />
                <IoIosAddCircleOutline />
              </div>
              <div className="specs">
                <div className="year">2021</div>
                <div className="maturity">+16</div>
                <div className="duration">1 hour 25 mins</div>
              </div>
              <div className="genre">Action - Drama - Horror</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
