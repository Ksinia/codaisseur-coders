import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../store/post/actions";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { deletePost } from "../store/postlist/actions";
import Likes from "./Likes";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id));
  }
  handleClick = () => {
    console.log("delete");
    this.props.dispatch(deletePost(this.props.match.params.id));
  };

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
              <p>By: {this.props.postData.post.developer.name}</p>
            )}
            <ReactMarkdown source={this.props.postData.post.content} />
            <Likes />
            {this.props.currentUserProfile &&
              this.props.postData.post.developer.id ===
                this.props.currentUserProfile.id && (
                <Link onClick={this.handleClick} to="/read/">
                  Delete this post
                </Link>
              )}
          </div>
        )}
        {this.props.postData.comments &&
          this.props.postData.comments.count > 0 && (
            <div>
              <h2>Comments:</h2>
              {this.props.postData.comments.rows.map(row => {
                return <p key={row.id}>{row.text}</p>;
              })}
            </div>
          )}
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
