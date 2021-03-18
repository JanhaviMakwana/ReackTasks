import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
import './Blog.css'


class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPostId: null
        }
    }

    postClickedHandler = (id) => {
        this.setState({ selectedPostId: id });
        this.props.history.push('/full-post');
    }

    render() {
        return (
            <div className="Blog">
                <header className="Header">
                    <nav>
                        <ul>
                            <button><li><a href="/">Home</a></li></button>
                            <button><li><a href="/full-post">Full Post</a></li></button>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/full-post" exact render={() => <FullPost id={this.state.selectedPostId} />} />
                    <Route path="/" render={() => <Posts clicked={this.postClickedHandler} />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Blog);