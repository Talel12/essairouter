import React, { useState } from "react";
import { moviesList } from "./Data";
import "../styles/nav.css"
import { Link, Route, Routes } from "react-router-dom";


export default function NavBar() {
  const [movieList, setMovieList] = useState(moviesList);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const handle = (e) => setSearch(e.target.value);
  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);

  return (
    <div>
      <div className="navigation">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/movies">
            <li>Movies List</li>
          </Link>

          <Link to="../about">
            <li>About</li>
          </Link>
        </ul>
      </div>
     


      {/* <AddMovie handleAdd={addMovie} /> */}
    </div>
  );
}
