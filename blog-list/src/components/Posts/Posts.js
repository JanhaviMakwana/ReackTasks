import React from 'react';
import Post from './Post';
import axios from '../../axios';
import './Posts.css';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 7);
                this.setState({ posts: posts });
                console.log(this.state.posts);
            })
            .catch(error => {
                console.log(error);
                //this.setState({ error: error })
            });
    }



    render() {
        let posts = <p>Loading...</p>
        if (this.state.posts) {
            posts = this.state.posts.map(post => {
                return <Post post={post} key={post.id} clicked={() => this.props.clicked(post.id)} />
            });
        }
        return (
            <div className="Posts">
                {posts}
            </div>
        );
    }
}

export default Posts;