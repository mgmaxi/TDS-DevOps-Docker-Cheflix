import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './layouts/Header/Header.js';
import Row from './components/Row/Row.js';
import requests from './request';
import axios from 'axios';

function App() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchGenre = async () => {
      let genresUrl = requests.fetchGenres;
      try {
        const response = await axios.get(genresUrl);
        setGenres(response.data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenre();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Row
          title={'Netflix Originals'}
          fetchUrl={requests.fetchNetflixOriginals}
          genres={genres}
        ></Row>
        <Row
          title={'Trending'}
          fetchUrl={requests.fetchTrending}
          genres={genres}
        ></Row>
        <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated}></Row>
        <Row
          title={'Action Movies'}
          fetchUrl={requests.fetchActionMovies}
          genres={genres}
        ></Row>
        <Row
          title={'Comedy Movies'}
          fetchUrl={requests.fetchComedyMovies}
          genres={genres}
        ></Row>
        <Row
          title={'Horror Movies'}
          fetchUrl={requests.fetchHorrorMovies}
          genres={genres}
        ></Row>
        <Row
          title={'Romance Movies'}
          fetchUrl={requests.fetchRomanceMovies}
          genres={genres}
        ></Row>
        <Row
          title={'Documantaries'}
          fetchUrl={requests.fetchDocumantaries}
          genres={genres}
        ></Row>
      </main>
    </div>
  );
}

export default App;

