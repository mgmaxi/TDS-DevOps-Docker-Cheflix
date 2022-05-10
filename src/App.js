import React from 'react';
import './App.css';
import Header from './layouts/Header/Header.js';
import Row from './components/Row/Row.js';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Row title={'Up Coming'} fetchUrl={requests.fetchUpComing}></Row>
        <Row
          title={'Netflix Originals'}
          fetchUrl={requests.fetchNetflixOriginals}
          isHighRow
        ></Row>
        <Row title={'Trending'} fetchUrl={requests.fetchTrending}></Row>
        <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated}></Row>
        <Row
          title={'Action Movies'}
          fetchUrl={requests.fetchActionMovies}
        ></Row>
        <Row
          title={'Comedy Movies'}
          fetchUrl={requests.fetchComedyMovies}
        ></Row>
        <Row
          title={'Horror Movies'}
          fetchUrl={requests.fetchHorrorMovies}
        ></Row>
        <Row
          title={'Romance Movies'}
          fetchUrl={requests.fetchRomanceMovies}
        ></Row>
        <Row
          title={'Documantaries'}
          fetchUrl={requests.fetchDocumantaries}
        ></Row>
      </main>
    </div>
  );
}

export default App;

