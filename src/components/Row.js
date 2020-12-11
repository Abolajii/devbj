import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    trailerUrl
      ? setTrailerUrl("")
      : movieTrailer(
          movie.title ||
            movie.original_title ||
            movie.name ||
            movie.original_name ||
            ""
        )
          .then((url) => {
            const urlParam = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParam.get("v"));
          })
          .catch((err) => console.log(err));
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {!movies ? (
          <h1>Fetching</h1>
        ) : (
          movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLarge && "row__posterLarge"}`}
              key={movie.id}
              src={`${baseURL}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          ))
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};


export default Row;
