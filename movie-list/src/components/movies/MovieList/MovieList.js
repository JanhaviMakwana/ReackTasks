import React from 'react';
import MoviePanel from '../MoviePanel/MoviePanel';
import './MovieList.css';

const getMovies = (movies) => {
    return (
        <div>
            {
                movies.map(movie => <MoviePanel key={movie.id} movie={movie} />)
            }
        </div>
    );
}

const MovieList = (props) => (
    <div className="MovieList">
        {getMovies(props.movies)}
    </div>
);

export default MovieList;