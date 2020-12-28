import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './redux/Reducers/Post/postActions';
class posts extends Component {
    render() {
        console.log(this.props.post.post);
        return (
            <>
                <h1>Posts</h1>
                <button onClick={() => this.props.getPosts(21)}>Get New posts</button>
                {this.props.post && this.props.post.loading && <div className="loader"></div>}
                <ul>
                    {this.props.post.post && this.props.post.post.length &&
                        this.props.post.post.map(i => <li key={i.name}>{i.name}</li>)}
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.post
    }
}
export default connect(mapStateToProps, { getPosts })(posts);