import React from 'react';
import './MoviePanel.css';

const MoviePanel = (props) => {

    const photo = require(`../../../images/${props.movie.imageUrl}`).default;

    return (
        <div className="MoviePanel">
            <div>
                <img src={photo} alt="" className="MovieImage" />
                <h4 className="MovieTitle">{props.movie.title}</h4>
                <p className="MovieDesc">{props.movie.description}</p>
                <h6 className="MovieRating">{props.movie.rating}</h6>
            </div>
        </div>
    );

};

export default MoviePanel; 