import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { moviesList } from "./Data";
import MovieDetails from "./MovieDetails";
import MoviesList from "./MoviesList";

import NavBar from "./NavBar";

export default function Main() {


  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/About" element={<h1>About</h1>} />
        <Route
          path="/movies"
          element={
            <MoviesList
              moviesArray={moviesList}
            />
          }
        />
        <Route path="/movies/:id" element={<MovieDetails movies={moviesList}/>}/>
      </Routes>

      
    </div>
  );
}
