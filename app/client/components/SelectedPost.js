import React from "react";

import Post from "./Post";
import Comments from "./Comments";

const SelectedPost = React.createClass({
  render() {
    const postId = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );
    const post = this.props.posts[postId];
    const postComments = this.props.comments[this.props.params.postId] || [];
    return (
      <div className="single-photo">
        <Post postId={postId} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default SelectedPost;
