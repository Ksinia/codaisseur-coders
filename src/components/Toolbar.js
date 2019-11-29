import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/auth/actions";
import "./Toolbar.css";

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
      <div className="toolbar">
        <Link to="/">Homepage</Link>
        <Link to="/developers/">List of developers</Link>
        <Link to="/read/">List of Posts</Link>
        <Link to="/newpost">New post</Link>
        {/* {console.log(reduxState.auth.profile)} */}
        {!this.props.auth.profile && <Link to="/signup">Sign up</Link>}

      

        {!this.props.auth.profile && <Link to="/login">Log in</Link>}
         {this.props.auth.profile && (
          <Link to="/account/">
            <p>{this.props.auth.profile.name}</p>
          </Link>
        )}
        {this.props.auth.profile && (
          <Link onClick={this.handleClick} to="/login">
            Log out
          </Link>
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
