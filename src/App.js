import React from 'react';
import './App.css';
import Header from './layouts/Header/Header.js';
import Row from './components/Row/Row.js';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Row
          title={'NETFLIX ORIGINALS'}
          fetchUrl={requests.fetchNetflixOriginals}
          isHighRow
        ></Row>
        <Row title={'Up Coming'} fetchUrl={requests.fetchUpComing}></Row>
        <Row title={'Trending'} fetchUrl={requests.fetchTrending}></Row>
        <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated}></Row>
        <Row title={'Kids'} fetchUrl={requests.fetchPopularKids}></Row>
        <Row title={'Action'} fetchUrl={requests.fetchActionMovies}></Row>
        <Row title={'Horror'} fetchUrl={requests.fetchHorrorMovies}></Row>
        <Row title={'Romance'} fetchUrl={requests.fetchRomanceMovies}></Row>
        <Row title={'Comedy'} fetchUrl={requests.fetchComedyMovies}></Row>
        <Row
          title={'Documantaries'}
          fetchUrl={requests.fetchDocumantaries}
        ></Row>
      </main>
    </div>
  );
}

export default App;
