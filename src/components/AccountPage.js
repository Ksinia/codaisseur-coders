import React, { Component } from "react";
import { deleteAccount } from "../store/auth/actions";
import { connect } from "react-redux";

class AccountPage extends Component {
  state = {
    account: true
  };

  clickHandler = () => {
    this.props.dispatch(deleteAccount);
    this.setState({ account: false });
  };

  render() {
    return (
      <div>
        {this.state.account ? (
          <div>
            <h1>Account Page</h1>
            <button onClick={this.clickHandler}>Delete your account</button>
          </div>
        ) : (
          <p>You need to be logged in to see this page</p>
        )}
      </div>
    );
  }
}

export default connect()(AccountPage);
