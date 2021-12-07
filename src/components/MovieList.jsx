import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const MovieList = (props) => {
    console.log("MovieList component", props);
 return (
     <div>
         {
             props.movies.map((movie, i) => (
                <div className='d-inline-flex' key={i}>
                    <img src={movie.Poster} alt='Poster'></img>
                </div> 
             ))
         }
     </div>
 );
}

export default MovieList;