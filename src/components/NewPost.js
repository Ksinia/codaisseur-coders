import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/postlist/actions";
import { Link } from "react-router-dom";

class NewPost extends Component {
  state = { title: "", content: "", showNewPostLink: false };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const action = createPost(this.state.title, this.state.content);
    this.props.dispatch(action);
    this.setState({ ...this.state, showNewPostLink: true });
  };

  render() {
    console.log(this.props.newPostId);
    return (
      <div>
        {this.props.jwt && !this.state.showNewPostLink && (
          <div>
            <h1>Creating a new post</h1>
            <form onSubmit={this.handleSubmit}>
              <p>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label>Content</label>
                <textarea
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <button type="submit">Post</button>
              </p>
            </form>
          </div>
        )}
        {!this.props.jwt && <Link to="/login">You have to log in</Link>}
        {this.state.showNewPostLink && (
          <Link to={`/read/${this.props.newPostId}`}>
            <h1>Your new post</h1>
          </Link>
        )}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    newPostId: reduxState.postList.newPostId,
    jwt: reduxState.auth.token
  };
}
export default connect(mapStateToProps)(NewPost);
