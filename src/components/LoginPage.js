import React from "react";
import { connect } from "react-redux";
import { login } from "../store/login/actions";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const action = login(this.state.email, this.state.password); // series of actions
    this.props.dispatch(action); // little bit of magic. Thanks Dan Abramov
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
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
    );
  }
}
// we need this because we need to use dispatch, but we don't need mapStateToProps,
// because we don't use any info from state. So we don't put anything inside the paranthesis
export default connect()(LoginPage);
