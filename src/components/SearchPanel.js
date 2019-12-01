import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
class SearchPanel extends Component {
  initialState = { keyword: "" };
  state = this.initialState;
  //   handleSubmitAuthor = event => {
  //     event.preventDefault();
  //     this.props.dispatch(searchPosts("name", this.state.keyword));
  //     this.props.history.push("/thank-you");
  //   };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <form className="left-panel-form">
          <label htmlFor="search">Search posts by author name:</label>
          <input
            id="search"
            name="keyword"
            onChange={this.handleChange}
            value={this.setState.keyword}
          ></input>
          <NavLink to={`/search/name/${this.state.keyword}`}>
            <button type="submit">Search</button>
          </NavLink>
        </form>
        {/* <form onSubmit={this.handleSubmitTag} className="left-panel-form">
          <label htmlFor="search">Search posts by tag:</label>
          <input
            id="search"
            onChange={this.handleChange}
            value={this.setState.keyword}
          ></input>
          <button type="submit">Search</button>
        </form> */}
      </div>
    );
  }
}
// function mapStateToProps(reduxState) {
//   return {
//     developers: reduxState.developers,
//     tags: reduxState.tags
//   };
// }
export default connect()(withRouter(SearchPanel));
