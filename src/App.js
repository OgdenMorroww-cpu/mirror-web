import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./Components/MovieCard";

const App = () => {
  const [movies, setMovieState] = useState([]);
  const [searchTerm, searchMovieTerm] = useState("");
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7ac6bf5f";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovieState(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  return (
    <div className="app">
      <h1>React Movies API</h1>
      <div className="search">
        <input
          onChange={(e) => {
            searchMovieTerm(e.target.value);
          }}
          placeholder="Search for movies"
          value={searchTerm}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchMovieTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((myMovie) => (
            <MovieCard myMovie={myMovie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
