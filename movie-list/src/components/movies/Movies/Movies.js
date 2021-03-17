import React from 'react';
import GetMovies from '../GetMovies/GetMovies';
import MovieList from '../MovieList/MovieList';
import './Movies.css';

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ movies: GetMovies.getMovies() }));
    }
    render() {
        return (
            <div className="Movies">
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default Movies;