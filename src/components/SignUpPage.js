import React from "react";
import { connect } from "react-redux";
import { signUp } from "../store/auth/actions";

class SignUpPage extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const action = signUp(
      this.state.name,
      this.state.email,
      this.state.password
    );
    this.props.dispatch(action);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>
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
            <button type="submit">Sign up</button>
          </p>
        </form>
      </div>
    );
  }
}
export default connect()(SignUpPage);
