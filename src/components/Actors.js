import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => 
        <div className="actor" key={'actor_'+index}>
          <h2>Name: {actor.name}</h2>
          <ul> Movies: {actor.movies.map((movie, index) => 
                <li key={'movie'+index}>{movie}</li>
              )}
          </ul>
        </div>
  
      )}
    </div>
    )
  
}

export default Actors;
