import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
     <h1>Movies Page</h1>
        {movies.map((movie, index) =>
          <div className="movie" key={index}>
            <h2>{movie.title}</h2>
            <h3>{movie.time}</h3>
            <ul>{movie.genres.map((genre, index) => 
              <li key={'genre_'+index}>{genre}</li>
                )}
            </ul>
          </div>
        )}{/*{code here}*/}</div>;
}

export default Movies;
