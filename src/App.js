import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=6d8a135e&s=${searchValue}`;

    const response = await fetch(url)
    const responseJson = await response.json();

    // console.log(responseJson);
    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest();
  });


  return (
    <div className='App'>
      <MovieListHeading heading='React Movie App' />

      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
