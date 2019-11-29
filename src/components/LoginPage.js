import React from "react";
import { connect } from "react-redux";
import { login } from "../store/auth/actions";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: "",
    loggedin: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const action = login(this.state.email, this.state.password); // series of actions
    this.props.dispatch(action); // little bit of magic. Thanks Dan Abramov
    this.setState({ ...this.state, loggedin: true });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.loggedin ? (
          <div>
            <h1>You have succesfully logged in!</h1>
            <Link to="/account/">Account Page</Link>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <p>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <button type="submit">Login</button>
              </p>
            </form>
          </div>
        )}
      </div>
    );
  }
}
// we need this because we need to use dispatch, but we don't need mapStateToProps,
// because we don't use any info from state. So we don't put anything inside the paranthesis
export default connect()(LoginPage);
