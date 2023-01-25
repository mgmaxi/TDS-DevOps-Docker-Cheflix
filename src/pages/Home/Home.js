import React, { useState, useEffect } from 'react';
import './home.css';
import Header from '../../components/Header/Header.js';
import Row from '../../components/Row/Row.js';
import RowMyList from '../../components/RowMyList/RowMyList.js';
import requests from '../../request';

function Home() {
  const [myList, setMyList] = useState(
    JSON.parse(localStorage.getItem('myList')) || []
  );

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList));
  }, [myList]);

  const addToMyList = (movie) => {
    const isAlreadyAdded = myList.filter((m) => m.id === movie.id);
    if (isAlreadyAdded.length === 0) {
      setMyList([...myList, movie]);
    } else {
      return alert('Is already added!');
    }
  };

  const deleteFromMyList = (movie) => {
    setMyList(myList.filter((m) => m.id !== movie.id));
  };

  const likedMovie = (movie) => {
    setMyList(
      myList.map((m) =>
        m.id === movie.id ? { ...movie, like: !movie.like, dislike: false } : m
      )
    );
  };

  const dislikedMovie = (movie) => {
    setMyList(
      myList.map((m) =>
        m.id === movie.id
          ? { ...movie, dislike: !movie.dislike, like: false }
          : m
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <main>
        {myList.length !== 0 && (
          <RowMyList
            title={'My List'}
            myList={myList}
            onDeleteFromMyList={deleteFromMyList}
            onLike={likedMovie}
            onDislike={dislikedMovie}
          ></RowMyList>
        )}
        <Row
          title={'NETFLIX ORIGINALS'}
          fetchUrl={requests.fetchNetflixOriginals}
          isHighRow
        ></Row>
        <Row
          title={'Up Coming'}
          fetchUrl={requests.fetchUpComing}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Trending'}
          fetchUrl={requests.fetchTrending}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Top Rated'}
          fetchUrl={requests.fetchTopRated}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Kids'}
          fetchUrl={requests.fetchPopularKids}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Action'}
          fetchUrl={requests.fetchActionMovies}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Horror'}
          fetchUrl={requests.fetchHorrorMovies}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Romance'}
          fetchUrl={requests.fetchRomanceMovies}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Comedy'}
          fetchUrl={requests.fetchComedyMovies}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Documantaries'}
          fetchUrl={requests.fetchDocumantaries}
          onAddToMyList={addToMyList}
        ></Row>
      </main>
    </div>
  );
}

export default Home;
