import React, { Component } from "react";
import "./NewComment.css";
import { submitComment } from "../store/post/actions";
import { connect } from "react-redux";

class NewComment extends Component {
  initialState = { newComment: "" };
  state = this.initialState;
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(
      submitComment(this.state.newComment, this.props.postData.post.id)
    );
    this.setState(this.initialState);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <textarea
          name="newComment"
          placeholder="Your comment"
          onChange={this.handleChange}
          value={this.state.newComment}
        ></textarea>
        <button type="submit">Add comment</button>
      </form>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    postData: reduxState.postData
  };
}

export default connect(mapStateToProps)(NewComment);
