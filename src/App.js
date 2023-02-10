import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=6872dc01';

// Static data for testing
const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

// Functional component
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); // calling the API
        const data = await response.json();
        // console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Avengers');
    }, []);
    return (
        <div className='app'>
            <h1>Movies</h1>

            <div className='search'>
                <input
                    placeholder='Search movies here'
                    value= {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {/* <MovieCard movie={movies[0]}/> */}
                            {
                                movies.map((movie) => (
                                    <MovieCard movie={movie} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>
    );
}
export default App; 