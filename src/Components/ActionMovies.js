import React, { useState, useEffect } from 'react';
import "./ActionMovies.css";


const API_KEY = '5ee10dc4';

function ActionMovies() {
  const movieList = [
    'The Avengers',
    'Inception',
    'The Dark Knight',
    'Jurassic Park'
  ];

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const fetchedMovies = await Promise.all(
          movieList.map(async (movieTitle) => {
            const response = await fetch(
              `http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(movieTitle)}`
            );
            const data = await response.json();
            return data;
          })
        );

        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className='movies_action'>
     

      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
           
           
            <img  className="movies_image"src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActionMovies;
