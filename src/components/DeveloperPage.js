import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchDeveloper,
  clearCurrentDeveloper
} from "../store/developers/actions";
import { Link } from "react-router-dom";

class DeveloperPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.developer;
    this.props.dispatch(clearCurrentDeveloper());
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
            {/* <p>Name: {name}</p>  we already have name in the header*/}
            <p>
              Github username:{" "}
              <a href={`https://github.com/${github_username}`}>
                {github_username}
              </a>
            </p>
            <p>About me: {intro}</p>
            {this.props.loggedin && <p>Email: {email}</p>}
            <p>
              Website: <a href={website}>{website}</a>
            </p>
            {posts.length > 0 ? (
              <p>
                <Link to={`/search/author/${id}`}>{posts.length} posts </Link>by{" "}
                {name}
              </p>
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
    profile: reduxState.developers,
    loggedin: Boolean(reduxState.auth.profile)
  };
}

export default connect(mapStateToProps)(DeveloperPage);
