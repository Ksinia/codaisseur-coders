import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeveloper } from "../store/developers/actions";

class DeveloperPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.developer;
    this.props.dispatch(fetchDeveloper(id));
  }
  render() {
    return (
      <div>
        {this.props.profile ? (
          <div>
            <h1>{this.props.profile.currentDeveloper.name}</h1>
            <p>Name: {this.props.profile.currentDeveloper.name}</p>
            <p>
              Github username:{" "}
              {this.props.profile.currentDeveloper.github_username}
            </p>
            <p>About me: {this.props.profile.currentDeveloper.intro}</p>
            <p>Email: {this.props.profile.currentDeveloper.email}</p>
            <p>Website: {this.props.profile.currentDeveloper.website}</p>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    profile: reduxState.developers
  };
}

export default connect(mapStateToProps)(DeveloperPage);
