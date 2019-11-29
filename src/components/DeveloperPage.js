import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeveloper } from "../store/developers/actions";
import { Link } from "react-router-dom";

class DeveloperPage extends Component {
  // functionForStrangePurpose () {
  //   const id = this.props.match.params.developer;

  // }
  componentDidMount() {
    const id = this.props.match.params.developer;
    this.props.dispatch(fetchDeveloper(id));
  }
  render() {
    const {
      name,
      github_username,
      intro,
      email,
      website,
      id,
      posts
    } = this.props.profile.currentDeveloper;
    return (
      <div>
        {this.props.profile.currentDeveloper.name ? (
          <div>
            <h1>{name}</h1>
            <p>Name: {name}</p>
            <p>Github username: {github_username}</p>
            <p>About me: {intro}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            {posts.length > 0 ? (
              <Link to={`/search/author/${id}`}>
                {posts.length} posts by {name}
              </Link>
            ) : (
              <p>No posts by {name} yet.</p>
            )}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    profile: reduxState.developers
  };
}

export default connect(mapStateToProps)(DeveloperPage);
