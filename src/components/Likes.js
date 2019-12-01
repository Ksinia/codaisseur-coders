import React, { Component } from "react";
import emptyheart from "../images/heart-outline.svg";
import filledheart from "../images/heart-filled.svg";
import { connect } from "react-redux";
import { Dislike, Like } from "../store/likes/actions";

class Likes extends Component {
  likeClickHandler = () => {
    this.props.dispatch(Like);
  };

  dislikeClickHandler = () => {
    this.props.dispatch(Dislike);
  };

  render() {
    return (
      <div>
        {this.props.auth.profile && this.props.liked ? (
          this.props.liked.reduce((acc, like) => {
            return (
              acc ||
              (like.developer &&
                like.developer.id === this.props.auth.profile.id)
            );
          }, false) ? (
            <p>
              <img src={filledheart} onClick={this.dislikeClickHandler} />
              {this.props.liked.filter(like => like.developer).length}
            </p>
          ) : (
            <p>
              <img src={emptyheart} onClick={this.likeClickHandler} />
              {this.props.liked.filter(like => like.developer).length}
            </p>
          )
        ) : (
          <p>
            <img src={emptyheart} />
            {this.props.liked.filter(like => like.developer).length}
          </p>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    // likedness: reduxState.likedness,
    liked: reduxState.postData.post.post_likes,
    auth: reduxState.auth
  };
}

export default connect(mapStateToProps)(Likes);

//display counter of total liked somehow from server
//it needs to locally display if liked by replacing with filled heart
//It needs to only be clickable if you're logged in   onClick={this.dislikeClickHandler}
