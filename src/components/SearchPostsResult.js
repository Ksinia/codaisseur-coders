import React, { Component } from "react";
import { searchPosts } from "../store/searchPosts/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SearchPostsResult extends Component {
  componentDidMount() {
    console.log("match props on Search result", this.props.match);
    this.props.dispatch(
      searchPosts(
        this.props.match.params.searchtype,
        this.props.match.params.keyword
      )
    );
  }

  render() {
    return (
      <div>
        {this.props.searchResults
          ? this.props.searchResults.rows.map(post => {
              return (
                <Link key={post.id} to={`/read/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
              );
            })
          : "Loading..."}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    searchResults: reduxState.searchResults
  };
}
export default connect(mapStateToProps)(SearchPostsResult);
