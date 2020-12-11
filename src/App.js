import React from 'react';
import Row from './components/Row';
import requests from './request';
import Hero from './Hero';
import Navbar from './Navbar';
import "./App.css";


function App() {
  return (
    <div className="app">
    <Navbar/>
    <Hero/>
    <Row title="NEFLIX ORIGINAL" fetchUrl={requests.fetchNeflix} isLarge/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}



export default App;
