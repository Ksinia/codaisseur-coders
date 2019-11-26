import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go back to the index</Link>
        <br />
        <Link to="/developers/">List of developers</Link>
      </div>
    );
  }
}

export default Toolbar;
