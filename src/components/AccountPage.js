import React, { Component } from "react";
import { deleteAccount, changeAccount } from "../store/auth/actions";
import { connect } from "react-redux";

class AccountPage extends Component {
  state = {
    change: false,
    name: "",
    github: "",
    email: "",
    intro: "",
    website: ""
  };

  clickHandler = () => {
    this.props.dispatch(deleteAccount);
  };

  clickChangeHandler = () => {
    this.setState({ ...this.state, change: true });
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitChange = event => {
    event.preventDefault();
    if (this.state.name) {
      this.props.dispatch(changeAccount(this.state.name, "name"));
    }
    if (this.state.github) {
      this.props.dispatch(changeAccount(this.state.github, "github_username"));
    }
    if (this.state.email) {
      this.props.dispatch(changeAccount(this.state.email, "email"));
    }
    if (this.state.intro) {
      this.props.dispatch(changeAccount(this.state.intro, "intro"));
    }
    if (this.state.website) {
      this.props.dispatch(changeAccount(this.state.website, "website"));
    }
    this.setState({
      ...this.state,
      change: false,
      name: "",
      github: "",
      email: "",
      intro: "",
      website: ""
    });
  };

  render() {
    return (
      <div>
        {this.props.profile ? (
          this.state.change ? (
            <div>
              <div className="inputform">
                <h1>Change Profile</h1>
                <br />
                <form onSubmit={this.submitChange}>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <input
                    name="github"
                    type="text"
                    placeholder="github username"
                    value={this.state.github}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <textarea
                    name="intro"
                    type="text"
                    placeholder="Write something about yourself"
                    value={this.state.intro}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <input
                    name="website"
                    type="text"
                    placeholder="website"
                    value={this.state.website}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <h1>Account Page</h1>
              <p>Name: {this.props.profile.name}</p>
              <p>Github username: {this.props.profile.github_username}</p>
              <p>About me: {this.props.profile.intro}</p>
              <p>Email: {this.props.profile.email}</p>
              <p>Website: {this.props.profile.website}</p>
              <button onClick={this.clickChangeHandler}>
                Change your profile
              </button>
              <button onClick={this.clickHandler}>Delete your account</button>
            </div>
          )
        ) : (
          <p>You need to be logged in to see this page</p>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    profile: reduxState.auth.profile
  };
}

export default connect(mapStateToProps)(AccountPage);
