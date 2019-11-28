import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/auth/actions";

class Toolbar extends Component {
  handleClick = () => {
    const action = logOut();
    console.log(action);
    console.log(this.props);
    this.props.dispatch(action);
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <Link to="/">Go back to the index</Link>
        <Link to="/developers/">List of developers</Link>
        {!this.props.auth.profile && <Link to="/login">Log in</Link>}
        {!this.props.auth.profile && <Link to="/signup">Sign up</Link>}
        {this.props.auth.profile && <p>{this.props.auth.profile.name}</p>}
        {this.props.auth.profile && (
          <button onClick={this.handleClick}>Log out</button>
        )}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    auth: reduxState.auth
  };
}

export default connect(mapStateToProps)(Toolbar);
