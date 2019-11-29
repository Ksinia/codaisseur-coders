import React, { Component } from "react";
import { deleteAccount, getProfile } from "../store/auth/actions";
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
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {this.props.profile ? (
          this.state.change ? (
            <div>
              <div>
                <form>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                  <input
                    name="github"
                    type="text"
                    placeholder="github username"
                    value={this.state.github}
                    onChange={this.changeHandler}
                  />
                  <textarea
                    name="intro"
                    type="text"
                    placeholder="Write something about yourself"
                    value={this.state.intro}
                    onChange={this.changeHandler}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                  <input
                    name="website"
                    type="text"
                    placeholder="website"
                    value={this.state.website}
                    onChange={this.changeHandler}
                  />
                  <button onSubmit={this.submitChange}>Submit</button>
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
