import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import './FullPost.css';

class FullPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        const id = this.props.id
        console.log(this.props.id);
        if (id) {
            axios.get('/posts/' + this.props.id)
                .then(response => {
                    this.setState({ post: response.data })
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ error: error })
                });
        }
    }

    onClosePostHandler = () => {
        this.props.history.push('/');
    }

    render() {
        let post = <p id="loading">Please select a post</p>
        if (this.props.id) {
            post = <p id="loading">Loading...</p>
        }
        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <h2>{this.state.post.body}</h2>
                    <div className="Edit">
                        <button onClick={this.onClosePostHandler}>Close</button>
                    </div>

                </div>
            );
        }

        return post;
    }


};

export default withRouter(FullPost);
