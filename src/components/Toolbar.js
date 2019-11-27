import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go back to the index</Link>
        <br />
        <Link to="/developers/">List of developers</Link>
        <br />
        {/* {console.log(reduxState.auth.profile)} */}
        {!this.props.auth.profile && <Link to="/login">Log in</Link>}
        {this.props.auth.profile && <p>{this.props.auth.profile.name}</p>}
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
// export default Toolbar;
