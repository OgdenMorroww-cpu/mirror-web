import React from "react";
import "../App.css";

const MovieCard = ({ myMovie }) => {
  return (
    <div className="movie">
      <div>
        <p>{myMovie.Year}</p>
      </div>
      <div>
        <img
          src={
            myMovie.Poster !== "N/A"
              ? myMovie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={myMovie.Title}
        />
      </div>
      <div>
        <span>{myMovie.Type}</span>
        <h3>{myMovie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
