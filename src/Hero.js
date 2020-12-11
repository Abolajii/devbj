import React, { useEffect, useState } from "react";
import requests from "./request";
import axios from "./axios";
import "./Hero.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Hero = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(requests.fetchNeflix);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchMovie();
  }, []);

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}/${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.original_title || movie.name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {movie.overview && truncateString(movie.overview, 200)}
          </h1>
        </div>
      </div>
      <div className="banner__fadebuttom"></div>
    </header>
  );
};

export default Hero;
