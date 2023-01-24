import React from "react";
import { NavLink } from "react-router-dom";
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};
function NavBar() {
  return ( 
    <div className="navbar">
      <ul>
      <li><NavLink to="/" style={linkStyles}  activeStyle={{
          background: "darkblue",
        }} exact>Home</NavLink></li>

      <li><NavLink to="/movies" style={linkStyles} activeStyle={{
          background: "darkblue",
        }} exact>Movies</NavLink></li>

      <li><NavLink to="/directors" style={linkStyles}  activeStyle={{
          background: "darkblue",
        }} exact>Directors</NavLink></li>

      <li><NavLink to="/actors" style={linkStyles}  activeStyle={{
          background: "darkblue",
        }} exact>Actors</NavLink></li>
    </ul>
    </div>
  )
}



export default NavBar;
