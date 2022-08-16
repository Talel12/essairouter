import React, { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { moviesList } from "./Data";
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";
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
          <Link to="../Home">
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
      <Navbar>
        <Container fluid>
          <Navbar.Brand className="logo">BestMovies</Navbar.Brand>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <SearchBar
                handle={handle}
                setRating={setRating}
                rating={rating}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/About" element={<h1>About</h1>} />
        <Route
          path="/movies"
          element={
            <MoviesList
              moviesArray={
                search
                  ? movieList.filter((movie) =>
                      movie.title.toLowerCase().includes(search.toLowerCase())
                    )
                  : rating > 1
                  ? movieList.filter((movie) => movie.rate >= rating)
                  : movieList
              }
            />
          }
        />
        <Route path="/movies/:id" element={<h1>khgjyg</h1>}/>
      </Routes>

      <AddMovie handleAdd={addMovie} />
    </div>
  );
}
