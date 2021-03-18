import React from 'react';
import './Post.css';

const post = (props) => {
    return (
        <div className="Post" onClick={props.clicked}>
            <h3>Post No:{props.post.id}</h3>
            <h2>{props.post.title}</h2>
        </div>
    );
};

export default post;