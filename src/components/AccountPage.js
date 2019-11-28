import React, { Component } from "react";
import { deleteAccount } from "../store/auth/actions";
import { connect } from "react-redux";

class AccountPage extends Component {
  clickHandler = () => {
    this.props.dispatch(deleteAccount);
  };

  render() {
    return (
      <div>
        <h1>Account Page</h1>
        <button onClick={this.clickHandler}>Delete your account</button>
      </div>
    );
  }
}

export default connect()(AccountPage);
