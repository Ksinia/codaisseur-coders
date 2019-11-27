import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../store/post/actions";
import ReactMarkdown from "react-markdown";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id));
  }

  render() {
    if (this.props.postData) {
      console.log("props", this.props.postData);
      console.log("comments", this.props.postData.comments);
    }

    return (
      <div>
        {!this.props.postData.post && <p>Loading...</p>}
        {this.props.postData.post && (
          <div>
            <h1>{this.props.postData.post.title}</h1>
            <ReactMarkdown source={this.props.postData.post.content} />
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
    postData: reduxState.postData
  };
}

export default connect(mapStateToProps)(PostPage);
