import React from "react";
import { connect } from "react-redux";
import { fetchPost, deleteComment } from "../store/post/actions";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { deletePost } from "../store/postlist/actions";
import NewComment from "./NewComment";
import { clearPostandComments } from "../store/post/actions";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    this.props.dispatch(clearPostandComments());
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id));
  }
  handleDeletePostClick = () => {
    this.props.dispatch(deletePost(this.props.match.params.id));
  };
  handleDeleteCommentClick(postId, commentId) {
    this.props.dispatch(deleteComment(postId, commentId));
    alert("the comment was deleted only locally");
  }
  render() {
    if (this.props.postData) {
    }

    return (
      <div>
        {!this.props.postData.post && <p>Loading...</p>}
        {this.props.postData.post && (
          <div>
            <h1>{this.props.postData.post.title}</h1>
            {this.props.postData.post.developer && (
              <p>
                By:{" "}
                <Link
                  key={this.props.postData.post.developer.id}
                  to={`/developers/${this.props.postData.post.developer.id}`}
                >
                  {this.props.postData.post.developer.name}
                </Link>
              </p>
            )}
            <ReactMarkdown source={this.props.postData.post.content} />
            {this.props.currentUserProfile &&
              this.props.postData.post.developer &&
              this.props.postData.post.developer.id ===
                this.props.currentUserProfile.id && (
                <Link onClick={this.handleDeletePostClick} to="/read/">
                  Delete this post
                </Link>
              )}
          </div>
        )}
        {this.props.postData.comments &&
          this.props.postData.comments.count > 0 && (
            <div>
              <h2>Comments:</h2>
              {[...this.props.postData.comments.rows]
                .sort((a, b) => a.id - b.id)
                .map(row => {
                  return (
                    <div key={row.id}>
                      <p>
                        {row.developer.name}: {row.text}
                      </p>
                      {this.props.currentUserProfile &&
                        row.developer.id ===
                          this.props.currentUserProfile.id && (
                          <button
                            onClick={() =>
                              this.handleDeleteCommentClick(
                                this.props.match.params.id,
                                row.id
                              )
                            }
                          >
                            Delete this comment
                          </button>
                        )}
                    </div>
                  );
                })}
            </div>
          )}
        {this.props.currentUserProfile && <NewComment />}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    postData: reduxState.postData,
    currentUserProfile: reduxState.auth.profile
  };
}

export default connect(mapStateToProps)(PostPage);
