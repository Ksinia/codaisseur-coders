import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/postlist/actions";
import { Link } from "react-router-dom";

class PostList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts);
  }

  render() {
    return (
      <div>
        <h1>Here will be a list of posts</h1>
        {this.props.posts
          ? this.props.posts.rows.map(post => {
              return (
                <Link key={post.id} to={`/read/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
              );
            })
          : "Loading..."}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.postList.posts
  };
}

export default connect(mapStateToProps)(PostList);
