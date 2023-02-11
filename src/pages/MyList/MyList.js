import React, { useState, useEffect } from 'react';
import BasicCard from '../../components/BasicCard/BasicCard';

const MyList = () => {
  const [myList, setMyList] = useState(
    JSON.parse(localStorage.getItem('myList')) || []
  );

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList));
  }, [myList]);
  return (
    <div className="moviesContainer">
      <ul className="movieCardContainer">
        {myList.map((movie) => (
          <li className="MovieCard">
            <BasicCard key={movie.id} movie={movie} notLink />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
