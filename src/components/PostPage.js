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
    console.log(this.props.postData.post);
    // console.log(this.props.postData.post.title);
    if (this.props.postData.post) {
      console.log("title", this.props.postData.post.title);
    }

    return (
      <div>
        {!this.props.postData.post && <p>Loading...</p>}
        {this.props.postData.post && (
          <div>
            <h1>{this.props.postData.post.title}</h1>
            <ReactMarkdown source={this.props.postData.post.content} />
            {/* <p>{this.props.postData.post.content}</p> */}
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
